const HomeCreditSummary = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:items-start border-b border-custom-blue-50 pb-2.5">
        <div className="flex-1 border-b md:border-b-0 md:border-r border-custom-blue-50 pb-2 mb-2 md:mb-0 md:pb-2">
          <h4 className="text-font-18 font-semibold text-custom-gray-500">
            IntentOI used Credit
          </h4>

          <ul className="mt-2">
            <li>
              <p className="font-semibold text-font-18 text-custom-green">
                Used: 183
              </p>
            </li>
            <li>
              <p className="font-semibold text-font-18 text-custom-green">
                Remaining: 217
              </p>
            </li>
            <li>
              <p className="font-semibold text-font-18">Total: 400</p>
            </li>
          </ul>
        </div>

        <div className="flex-1 md:pb-2 md:pl-10">
          <h4 className="text-font-18 font-semibold text-custom-gray-500">
            CaseSyncAI Credit
          </h4>

          <ul className="mt-2">
            <li>
              <p className="font-semibold text-font-18 text-custom-green">
                Used: 183
              </p>
            </li>
            <li>
              <p className="font-semibold text-font-18 text-custom-green">
                Remaining: 217
              </p>
            </li>
            <li>
              <p className="font-semibold text-font-18">Total: 400</p>
            </li>
          </ul>
        </div>
      </div>

      <ul className="mt-2.5">
        <li>
          <p className="font-semibold text-font-18 text-custom-gray-500">
            Billing Cycle: Renews July 1, 2025
          </p>
        </li>
        <li>
          <p className="font-semibold text-font-18 text-custom-gray-500">
            Last Upload: May 30, 2025 (6 credits used)
          </p>
        </li>
        <li>
          <p className="font-semibold text-font-18 text-custom-gray-500">
            CRM Sync: Enabled (CaseSync)
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HomeCreditSummary;
