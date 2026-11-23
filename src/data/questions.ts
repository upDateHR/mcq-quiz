import { Question } from '../types';

export const initialQuestions: Question[] = [
  {
    id: 1,
    question: "Which instrument can be issued to raise debt capital?",
    options: [
      "Certificate of deposits",
      "Convertible debentures",
      "Commercial papers",
      "All of the above"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Debt capital may be raised by issuing various types of debt instruments such as debentures, bonds, commercial papers, certificates of deposit, or pass-through certificates. Each instrument is defined by its tenor and interest rate."
  },
  {
    id: 2,
    question: "Which of the following is included in the process of public issue of debt securities?",
    options: [
      "Obtaining a credit rating for the issue",
      "Listing of securities on the stock exchanges",
      "Execution of debenture trust deed",
      "All of the above"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "The steps in a public issue of debt securities include passing a board resolution, executing a debenture trust deed, obtaining a credit rating, and listing the securities on stock exchanges."
  },
  {
    id: 3,
    question: "When it comes to debt a security, who is appointed to ensure that the lenders interests are protected?",
    options: [
      "Authorized persons",
      "Portfolio managers",
      "Debenture trustees",
      "Stock brokers"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Trustees are appointed to supervise investments when beneficiaries cannot directly do so. Debenture trustees specifically ensure that the lenders' interests are protected."
  },
  {
    id: 4,
    question: "Which among these provides a bidding platform for farmers and buyers located at distant places away from the local mandi?",
    options: [
      "Depository platform",
      "NDS-OM platform",
      "E-NAM platform",
      "Stock exchange platform"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "National Agricultural Market (e-NAM) is an online market platform that links existing mandis into a unified network. It allows remote bidding and provides electronic payment facilities."
  },
  {
    id: 5,
    question: "______ may issue equity and debt instruments in international markets.",
    options: [
      "Private sector companies",
      "Banks",
      "Financial institutions",
      "All of the above"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Banks, private sector companies, and financial institutions are all permitted to issue equity and debt instruments in international markets."
  },
  {
    id: 6,
    question: "______ are not provided by the Depository Receipts to its investors.",
    options: [
      "Right to dividends",
      "Capital appreciation",
      "Voting rights",
      "All of the above"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Depository Receipts (DRs) represent shares of a local company traded abroad. They offer rights to dividends and capital appreciation, but do not grant voting rights."
  },
  {
    id: 7,
    question: "______ evaluates a debt security and provides a professional opinion about the ability of the issuer to meet the obligations for payment of interest and return of principal.",
    options: [
      "Credit rating agencies",
      "Stock brokers",
      "Bankers to an issue",
      "Registrars of an issue"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Credit rating agencies evaluate debt securities and use ranking symbols to help investors assess default risks."
  },
  {
    id: 8,
    question: "Who are the major players in primary market? 1. Merchant Bankers 2. Bankers to the issue 3. Depository Participants",
    options: [
      "1 and 3",
      "1 only",
      "2 and 3",
      "1, 2 and 3"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "The primary market involves multiple key players, including merchant bankers, mutual funds, financial institutions, individual investors, brokers, bankers to the issue, and depository participants."
  },
  {
    id: 9,
    question: "The equity shares of face value Rs.10 of a listed company are trading around Rs. 500 in the stock markets. This company wants to raise further capital from the public. At what price will the company issue new shares?",
    options: [
      "At around Rs 500 which is the current market price",
      "At Rs 10 which is the face value",
      "At Rs 255 which is the average of face value and market price",
      "It cannot raise more capital"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Further issues are typically offered as rights issues to existing shareholders. These are priced near or slightly below the current market price to give shareholders an advantage."
  },
  {
    id: 10,
    question: "______ comes under the purview of SEBI regulations.",
    options: [
      "Valuation of securities held in mutual fund portfolio",
      "The format and disclosure details in a mutual fund offer document",
      "Types of expenses that can be charged to a mutual fund scheme",
      "All of the above"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "SEBI regulates mutual fund portfolio valuations, offer document disclosures, and chargeable scheme expenses."
  },
  {
    id: 11,
    question: "Identify the FALSE statement/s.",
    options: [
      "The issuer issuing tax free bonds as specified by CBDT is exempted from the minimum subscription limit",
      "The minimum subscription in a public issue of debt securities should not be less than 85 percent of the base issue size",
      "The debentures issued under a public offer must mandatorily be listed on a stock exchange",
      "All of the above are false"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "The minimum subscription for public debt issues is 75 percent of the base issue size, not 85 percent. Tax-free CBDT bonds are exempt from this limit."
  },
  {
    id: 12,
    question: "Which type of order allows the user to buy or sell a security as soon as the order is released into the system, failing which the order is cancelled from the system.",
    options: [
      "A Stop Loss order",
      "A Limit order",
      "A Good till cancel (GTC) order",
      "An Immediate or Cancel (IOC) order"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "An IOC order executes immediately upon release. Any unexecuted or partial portion is instantly cancelled by the system."
  },
  {
    id: 13,
    question: "A mutual fund folio has no transaction for six months. In this case the investor will not receive any Consolidated Account Statement. State whether True or False?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Active folios receive a statement monthly. Folios with no transactions over a six-month period receive a statement at the end of that period."
  },
  {
    id: 14,
    question: "Which of these is considered as an agent of the broker and is registered with the respective stock exchanges?",
    options: [
      "Custodian",
      "Primary broker",
      "Authorized person",
      "Portfolio Manager"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "An Authorized Person (AP) acts as an agent of the broker and must be registered with the relevant stock exchanges."
  },
  {
    id: 15,
    question: "In the ______ option, dividend is declared but not paid out to its unit holders.",
    options: [
      "Growth option",
      "Re-investment of income distribution cum capital withdrawal option",
      "Pay-out of income distribution cum capital withdrawal option",
      "All of the above"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Under the re-investment IDCW option, declared dividends are automatically used to buy additional units in the same scheme."
  },
  {
    id: 16,
    question: "A public issue of shares will be open for a minimum of 3 working days and a maximum of 10 working days. However, in case of a revision in the price band, the issuer can extend the bidding period for a minimum period of ______ working days, subject to the maximum limit.",
    options: [
      "Two",
      "Three",
      "Five",
      "Seven"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "If a price band is revised, the bidding window must be extended by a minimum of 3 working days, without exceeding the overall 10-day maximum limit."
  },
  {
    id: 17,
    question: "What does diversification of a portfolio mean?",
    options: [
      "Investments in large cap stocks or funds only",
      "Part investment in short term funds and part investment in long term funds",
      "Part investment in spot market and part investment in derivatives market",
      "Investment across multiple sectors and securities"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Diversification balances a portfolio across different sectors and securities to smooth out market price fluctuations."
  },
  {
    id: 18,
    question: "Calculate the current yield of a bond whose face value is Rs. 100 and it pays 9% coupon. The current market price is Rs. 114.",
    options: [
      "6.8%",
      "7.8%",
      "8.8%",
      "9.8%"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Current yield is calculated as (Coupon Rate / Market Price). In this case: 9 / 114 = 0.078, which equals 7.8%."
  },
  {
    id: 19,
    question: "Which of these mutual funds usually have the highest risk?",
    options: [
      "Multi-Cap Funds",
      "Large-Cap Funds",
      "Sectoral Funds",
      "All Equity fund carry the same risk"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Sectoral funds invest exclusively in a specific sector (like pharma or banking). This lack of diversification makes them highly risky if adverse news hits that sector."
  },
  {
    id: 20,
    question: "Retail Individual Investors are those who invest not more than ______ in a single issue.",
    options: [
      "Rs.5 lakhs",
      "Rs.1 lakhs",
      "Rs.3 lakhs",
      "Rs.2 lakhs"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Retail Individual Investors invest up to Rs. 2 lakhs in an issue. Those investing above Rs. 2 lakhs are Non-Institutional Buyers (NIBs)."
  },
  {
    id: 21,
    question: "In ______, the borrower can defer the payment of coupons in the initial 1 to 3 year period.",
    options: [
      "Deferred interest bonds",
      "Junk bonds",
      "Step-up bonds",
      "Puttable bonds"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Deferred interest bonds explicitly allow the issuing borrower to postpone coupon payments during the first 1 to 3 years."
  },
  {
    id: 22,
    question: "______ manages the regulatory and operational aspects of the public offer of shares.",
    options: [
      "Underwriters",
      "The Issuer/Company itself",
      "Bankers to the issue",
      "Lead Managers"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Lead managers are appointed by the company to handle operational and regulatory compliance for a public share offering."
  },
  {
    id: 23,
    question: "State True or False - The Price to Book Value - PBV ratio compares the market price of the stock with its book value.",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "The PBV ratio is calculated by dividing the market price per share by the book value per share."
  },
  {
    id: 24,
    question: "If the main objective of an investor is capital preservation, where should he invest?",
    options: [
      "Bank Deposits",
      "Ultra-short term debt funds",
      "Both 1 and 2",
      "None of the above"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Capital preservation aims to protect the core principal value. Cash, bank deposits, and ultra-short-term debt funds are ideal for this."
  },
  {
    id: 25,
    question: "There is an inverse relationship between the interest rate and the price of a bond - State True or False?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Debt security values move inversely to market interest rates. When market rates rise, bond prices fall, and vice versa."
  },
  {
    id: 26,
    question: "Currently, mutual funds cannot charge ______ from its investors.",
    options: [
      "Entry loads",
      "Exit loads",
      "Losses due to valuation",
      "Fund management fees"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "SEBI prohibits charging entry loads to investors. However, mutual funds are allowed to apply exit loads when an investor leaves a scheme."
  },
  {
    id: 27,
    question: "Which of these instrument(s) carry Government guarantee?",
    options: [
      "Preference shares",
      "Commercial Papers",
      "Certificate of Deposits",
      "Treasury Bills"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Only sovereign debt instruments issued by the government, such as Government Securities (G-Secs) and Treasury Bills, carry a government guarantee."
  },
  {
    id: 28,
    question: "______ trade in already issued securities enabling investors to exit from an investment.",
    options: [
      "Primary market",
      "Secondary market",
      "Money market",
      "Futures market"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Secondary markets (stock exchanges) provide liquidity, allowing investors to trade and exit previously issued equity shares or debentures."
  },
  {
    id: 29,
    question: "Banks, Non-banking Finance Companies and Financial Institutions can issue which type of securities to raise capital?",
    options: [
      "Securitized paper",
      "Convertible bonds",
      "Commercial paper",
      "All of the above"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Regulated financial entities can raise capital via securitized papers (like PTCs), convertible bonds, and short-term commercial papers."
  },
  {
    id: 30,
    question: "A mutual fund folio can only be created for a single holder - State True or False?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "A single mutual fund folio can accommodate up to three joint holders."
  },
  {
    id: 31,
    question: "Which organizations invest in large volumes in the securities market and have specialized knowledge and skills in investing?",
    options: [
      "Custodians",
      "Institutional investors",
      "Depositories",
      "All of the above"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Institutional investors are entities (like mutual funds) that possess specialized market knowledge and handle massive investment volumes."
  },
  {
    id: 32,
    question: "The composition of stocks in the index is reviewed and modified from time to time to keep the index representative of the underlying market - State True or False?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Market indices are periodically updated. Underperforming or illiquid stocks are replaced to keep the index a true reflection of the market."
  },
  {
    id: 33,
    question: "Foreign Currency Convertible Bonds - FCCBs are regulated by ______ under the Foreign Exchange Management Act (FEMA).",
    options: [
      "Ministry of Finance",
      "SEBI",
      "RBI notifications",
      "IRDA"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Under the rules of FEMA, FCCBs are regulated directly through notifications issued by the Reserve Bank of India (RBI)."
  },
  {
    id: 34,
    question: "If a business were to fail, the equity shareholders are paid only after the claims of ______ are settled.",
    options: [
      "Government",
      "Employees",
      "Creditors",
      "Government, Employees and Creditors"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "During corporate liquidation, asset proceeds are prioritized for statutory and debt claims (government, employees, lenders) before residual value reaches equity holders."
  },
  {
    id: 35,
    question: "Which institution prescribes categories of investors who can invest in mutual funds?",
    options: [
      "Securities and Exchange Board of India (SEBI)",
      "Association of Mutual Funds in India (AMFI)",
      "Insurance Regulatory and Development Authority (IRDA)",
      "Reserve Bank of India (RBI)"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "SEBI regulations define who is eligible to invest in Indian mutual funds, covering individuals, NRIs, institutions, and trusts."
  },
  {
    id: 36,
    question: "What is the process of valuing the securities at its current market price called as?",
    options: [
      "Fixing to market",
      "Marking to market",
      "Price parity",
      "Spot valuation"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Mutual funds calculate and declare their unit value daily based on asset price changes. This current market revaluation is called marking to market (MTM)."
  },
  {
    id: 37,
    question: "When a person makes an investment in Bank Deposits, his requirement of liquidity, growth, adequate returns, capital protection etc. are fulfilled - State whether True or False?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Bank deposits provide guaranteed interest income and capital protection. However, their fixed returns do not satisfy long-term capital growth needs compared to equities."
  },
  {
    id: 38,
    question: "Mutual fund offers various benefits but one of them from the below options is NOT a benefit offered by Mutual Funds. Which one is it?",
    options: [
      "Financial Planning",
      "Liquidity",
      "Professional fund management",
      "Diverse portfolios"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Financial planning manages a household's overall financial health. Funds are a tool used by financial planners, but the fund schemes themselves do not offer planning services."
  },
  {
    id: 39,
    question: "Who issues Commercial Papers (CP) to raise short term funds in the money market.",
    options: [
      "Banks",
      "Central Government",
      "Companies",
      "All of the above"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Commercial Paper is an unsecured short-term instrument issued by companies and NBFCs. Governments issue Treasury Bills, and banks issue Certificates of Deposit instead."
  },
  {
    id: 40,
    question: "When there is a change in the interest rates, which of these mutual funds are directly impacted?",
    options: [
      "Equity Funds",
      "Index Funds",
      "Floater funds",
      "Sectoral funds"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Floater funds are open-ended debt schemes that predominantly hold floating-rate instruments, meaning their payouts adjust dynamically as interest rates shift."
  },
  {
    id: 41,
    question: "An investor places a stop loss order along with his buy order. This to ensure that he does not suffer big losses. State whether True or False?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "If a stock price drops unexpectedly after a purchase, an attached stop-loss order automatically triggers a sell order to limit further financial loss."
  },
  {
    id: 42,
    question: "In case of a fixed price issue, the Prospectus shall contain which of the following information?",
    options: [
      "Financial statement of the issuer company",
      "Details of shares offered",
      "Overview of the industry and business",
      "All of the above"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "A prospectus details issue dates, lead managers, financial reports, capital structures, accounting policies, and offering procedures."
  },
  {
    id: 43,
    question: "If there is a 10% change in the index before 1 pm, the trading on the stock exchange is halted for ______.",
    options: [
      "No halt",
      "15 minutes",
      "30 minutes",
      "45 minutes"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Equity and derivative markets halt operations when index circuit limits are triggered. A 10% breach before 1:00 PM requires a mandatory 45-minute trading halt."
  },
  {
    id: 44,
    question: "Which of these investments are considered to be most liquid?",
    options: [
      "Equity shares",
      "Gold jewelery",
      "Silver bricks",
      "All of the above"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Liquidity represents how easily an asset converts to cash. Equities sell easily in secondary markets with cash settlement in 2–3 days, whereas physical gold or silver is harder to liquidate quickly."
  },
  {
    id: 45,
    question: "Mr. Mehta places an order to sell 100 shares of XYZ Ltd at a price of Rs 430. The market current price of XYZ Ltd. is Rs 400. What type of order has Mr. Mehta placed?",
    options: [
      "Stop Loss Order",
      "Limit Order",
      "Market Order",
      "Profit making order"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "A limit order specifies a strict trade execution price. The trade triggers only if the market reaches that target value; otherwise, it expires at the end of the day."
  },
  {
    id: 46,
    question: "A farmer in Maharashtra is planning to grow rice in his fields but is concerned that the rainfall could be inadequate and his crops can fail. What type of derivatives will help him hedge his losses?",
    options: [
      "Equity derivatives on rice growing companies",
      "Currency derivatives",
      "Nifty futures",
      "Weather derivatives"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Weather derivatives offer a contract payoff tied directly to environmental metrics like rainfall volumes, allowing agricultural producers to hedge weather-related crop risks."
  },
  {
    id: 47,
    question: "When a business enterprise needs to raise capital through a public issue, it has to register itself with ______.",
    options: [
      "Ministry of Corporate Affairs",
      "Commerce Ministry",
      "Department of Economic Affairs",
      "Ministry of Finance"
    ],
    correctAnswer: 0,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Public equity issuers must structure themselves as limited companies, requiring formal registration and compliance under the Ministry of Corporate Affairs and the Indian Companies Act."
  },
  {
    id: 48,
    question: "The index SX40 is made up of 40 stocks listed on the ______.",
    options: [
      "Over the Counter Exchange (OCE)",
      "Multi Commodity Exchange (MCX)",
      "Metropolitan Stock Exchange of India Ltd (MSEI)",
      "National Stock Exchange (NSE)"
    ],
    correctAnswer: 2,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "The SX40 index uses a free-float methodology to track 40 highly liquid, large-cap stocks from diverse sectors listed on the Metropolitan Stock Exchange of India (MSEI)."
  },
  {
    id: 49,
    question: "The redemption amount can be different for each transaction in Systematic Withdrawal Plans - State True or False?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: 1,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Systematic Withdrawal Plans (SWPs) execute periodic asset redemptions at the prevailing NAV, but the payout amount chosen for each interval remains strictly fixed."
  },
  {
    id: 50,
    question: "What is the NET economic value of all derivatives positions?",
    options: [
      "Its impossible to calculate",
      "Its infinite",
      "Depends on the underlying",
      "Zero"
    ],
    correctAnswer: 3,
    userAnswer: undefined,
    isCorrect: undefined,
    explanation: "Derivative markets balance every long (buy) position with a corresponding short (sell) position. Because no new underlying assets are generated, the cumulative net economic value is mathematically zero."
  }
];
