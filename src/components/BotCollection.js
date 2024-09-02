import React from "react";
import BotCard from "./BotCard";
import SortBar from "./SortBar"; 

function BotCollection({ bots, enlistBot, deleteBot, onSelectBot }) {
  const [SortBy, setSortBy] = React.useState(null);

  const sortBots = (property) => {
    const sortedBots = [...bots].sort((a, b) => a[property] - b[property]);
    setSortBy(property);
    onSelectBot(sortedBots);
  };
  

  return (
    <>
      <SortBar onSort={sortBots} />
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              clickEvent={onSelectBot}
              deleteBot={deleteBot}
              onEnlist={enlistBot}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BotCollection;