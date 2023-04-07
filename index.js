const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });

  console.log('waiting for new events ...')

  api.query.system.events((events) => {
    console.log('new events: ');
    events.forEach((event) => {
      const { section, method } = event.event;
      console.log(section, method);
    });
  });
}

main();
