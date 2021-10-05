import Timestamp from "@/entities/Timestamp";

export default interface IssuedNFT {
    nftUid: number;
    nftSerial: number;
    issuedTime: Timestamp;
    nftSetUid: number;
    userNumber?: string;
}