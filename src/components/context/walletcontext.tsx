import { useState, createContext, type ReactNode } from "react";

interface WalletContextType {
    isWalletConnected: boolean;
    walletAddress: string;
    connectWallet: () => void;
    disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
    children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");

    const connectWallet = async () => {
        setIsWalletConnected(true);
        setWalletAddress('0xDEAF...fB8B');
    }

    const disconnectWallet = () => {
        setIsWalletConnected(false);
        setWalletAddress('');
    }

    return (
        <WalletContext.Provider value={{ isWalletConnected, walletAddress, connectWallet, disconnectWallet}}>
            {children}
        </WalletContext.Provider>
    );
};

export default WalletContext;

