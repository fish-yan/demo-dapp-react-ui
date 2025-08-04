import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {CreateJettonDemo} from "./components/CreateJettonDemo/CreateJettonDemo";
import {WalletBatchLimitsTester} from "./components/WalletBatchLimitsTester/WalletBatchLimitsTester";
import {SignDataTester} from "./components/SignDataTester/SignDataTester";

const baseUrl = document.baseURI.replace(/\/$/, '');
function App() {
  return (
      <TonConnectUIProvider
          manifestUrl="https://fish-yan.github.io/demo-dapp-react-ui/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "ONTO",
                name: "ONTO",
                imageUrl: "https://app.ont.io/ontoMsgPic/onto.png",
                tondns: "onto.app",
                aboutUrl: "https://onto.app",
                universalLink: "ontoprovider://link/ton-connect",
                jsBridgeKey: "onto",
                bridgeUrl: "https://tonbridge-test.onto.app/bridge",
                platforms: ["ios", "android"]
              },
              {
                appName: "OKX1",
                name: "OKX1",
                imageUrl: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
                tondns: "okxwallet.com",
                aboutUrl: "https://www.okx.com/okx-wallet",
                universalLink: "https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect",
                jsBridgeKey: "okx",
                bridgeUrl: "https://www.okx.com/tonbridge/discover/rpc/bridge",
                platforms: ["ios", "android"]
              }
            ]
          }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo'
          }}
      >
        <div className="app">
            <Header />
            <TxForm />
            <WalletBatchLimitsTester />
            <SignDataTester />
            <CreateJettonDemo />
            <TonProofDemo />
            <Footer />
        </div>
      </TonConnectUIProvider>
  )
}

export default App
