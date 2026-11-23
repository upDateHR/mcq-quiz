import React, { useState, useEffect, useCallback } from 'react';
import { X, UserPlus, Users, RefreshCw, CheckCircle2, ShieldAlert } from 'lucide-react';
import { getApiUrl } from '../lib/api';

interface ManagedUser {
  id: string;
  name: string;
  email: string;
  attemptsCount: number;
  totalAllowed: number;
  onlineAttemptLeft: number;
  createdAt: string;
}

interface UserManagementModalProps {
  onClose: () => void;
}

export const UserManagementModal: React.FC<UserManagementModalProps> = ({ onClose }) => {
  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Form state to add a new user
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newName, setNewName] = useState('');
  const [newTotalAttempts, setNewTotalAttempts] = useState('20');
  const [submitting, setSubmitting] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(getApiUrl('/api/admin/users'));
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.users)) {
          setUsers(data.users);
        }
      } else {
        setError('Failed to fetch user directory.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error fetching users.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = newEmail.trim().toLowerCase();
    const cleanPassword = newPassword.trim();
    const cleanName = newName.trim() || cleanEmail.split('@')[0];
    const totalAllowed = parseInt(newTotalAttempts, 10) || 20;

    if (!cleanEmail || !cleanPassword) {
      setError('Email and password are required.');
      return;
    }

    setSubmitting(true);
    setError('');
    setSuccessMsg('');

    try {
      const res = await fetch(getApiUrl('/api/admin/users'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: cleanEmail,
          password: cleanPassword,
          name: cleanName,
          totalAllowed: totalAllowed,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Failed to add user.');
        setSubmitting(false);
        return;
      }

      setSuccessMsg(`User ${cleanEmail} created successfully with secure password hashing!`);
      setNewEmail('');
      setNewPassword('');
      setNewName('');
      setNewTotalAttempts('20');
      fetchUsers();
    } catch (err) {
      console.error(err);
      setError('Network error adding user.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1b2246]">User Credentials Database System</h2>
            <p className="text-xs text-gray-500">Manage user authentication accounts and attempt allocations</p>
          </div>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-xs font-medium flex items-center space-x-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-xs font-medium flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Scrollable Container */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-1">
          {/* Add New User Form */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl border border-gray-200">
            <h3 className="text-sm font-bold text-gray-800 flex items-center space-x-2 mb-3">
              <UserPlus className="w-4 h-4 text-red-600" />
              <span>Add New Authentication User</span>
            </h3>

            <form onSubmit={handleAddUser} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Password (Hashed on Server)</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Display Name (Optional)</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 uppercase mb-1">Total Online Attempts</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={newTotalAttempts}
                  onChange={(e) => setNewTotalAttempts(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold py-2.5 rounded-lg text-xs shadow-sm transition-all cursor-pointer flex items-center justify-center space-x-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{submitting ? 'Creating User...' : 'Add User to Database'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* User List Table */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-gray-800">
                Database Accounts ({users.length})
              </h3>
              <button
                onClick={fetchUsers}
                className="text-xs text-red-600 hover:underline flex items-center space-x-1 cursor-pointer font-medium"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Refresh</span>
              </button>
            </div>

            {loading ? (
              <div className="text-center py-6 text-xs text-gray-500">Loading user database...</div>
            ) : users.length === 0 ? (
              <div className="text-center py-6 text-xs text-gray-500">No user accounts found.</div>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200 text-gray-700 font-bold">
                      <th className="py-2.5 px-3">Email</th>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3 text-center">Attempts Left</th>
                      <th className="py-2.5 px-3 text-center">Total Used</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-gray-50">
                        <td className="py-2.5 px-3 font-semibold text-gray-900">{u.email}</td>
                        <td className="py-2.5 px-3 text-gray-600">{u.name}</td>
                        <td className="py-2.5 px-3 text-center font-bold text-red-600">
                          {u.onlineAttemptLeft} / {u.totalAllowed}
                        </td>
                        <td className="py-2.5 px-3 text-center text-gray-500">{u.attemptsCount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
