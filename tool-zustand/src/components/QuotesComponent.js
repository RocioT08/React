import React, { useEffect, useState } from "react";
import mainStore from "../zustand/stores/useQuotesStore";
import "./style.css";

export const QuotesComponent = () => {
  const { fetchQuotes, quotes } = mainStore();
  const [quotesFetched, setQuotesFetched] = useState(false);

  useEffect(() => {
    if (!quotesFetched) {
      fetchQuotes();
      setQuotesFetched(true);
    }
  }, [quotes, quotesFetched, setQuotesFetched, fetchQuotes]);

  console.log(quotes);
  return (
    <React.Fragment>
      {quotes.length ? (
        <div>
          <ul>
            {quotes.map((record) => {
              return (
                <p key={record.quote_id}>
                  {record.quote_id} - {record.quote}
                </p>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </React.Fragment>
  );
};
