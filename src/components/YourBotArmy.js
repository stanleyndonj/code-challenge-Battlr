import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, detachBot, deleteBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.length > 0 ? (
            bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                clickEvent={() => detachBot(bot)}
                deleteBot={() => deleteBot(bot)}
              />
            ))
          ) : (
            <div className="column">No bots in your army</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
