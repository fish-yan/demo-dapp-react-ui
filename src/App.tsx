import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {CreateJettonDemo} from "./components/CreateJettonDemo/CreateJettonDemo";
import {WalletBatchLimitsTester} from "./components/WalletBatchLimitsTester/WalletBatchLimitsTester";
import {SignDataTester} from "./components/SignDataTester/SignDataTester";

function App() {
  return (
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
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
                bridgeUrl: "https://service-test.onto.app/tonbridge/bridge",
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
