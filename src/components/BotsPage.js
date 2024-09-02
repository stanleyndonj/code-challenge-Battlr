import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error("Error fetching bots:", error));
  }, []);

  function handleEnlist(bot) {
    if (!botArmy.some(b => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
      setBots(bots.map(b => (b.id === bot.id ? { ...b, army: true } : b)));
    }
  }

  function handleDetach(bot) {
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
    setBots(bots.map(b => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  function handleDelete(bot) {
    fetch(`http://localhost:8000/bots/${bot.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setBots(bots.filter(b => b.id !== bot.id));
        setBotArmy(botArmy.filter(b => b.id !== bot.id));
      })
      .catch(error => console.error("Error deleting bot:", error));
  }

  function handleShowSpecs(bot) {
    setSelectedBot(bot);
  }

  function handleBack() {
    setSelectedBot(null);
  }

  return (
    <div>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={handleBack}
          onEnlist={() => handleEnlist(selectedBot)}
        />
      ) : (
        <>
          <YourBotArmy
            bots={botArmy}
            detachBot={handleDetach}
            deleteBot={handleDelete}
          />
          <BotCollection
            bots={bots}
            enlistBot={handleEnlist}
            deleteBot={handleDelete}
            onSelectBot={handleShowSpecs}
          />
        </>
      )}
    </div>
  );
}

export default BotsPage;
