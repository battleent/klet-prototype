export default interface NFTSet {
    nftSetUid: number;
    serviceNumber: number;
    nftSetName: string;
    nftSetImage: string;
    nftSetExplanation?: string;
    nftTypeUid: number;
    nftGradeUid?: number;
    canSendNft: boolean;
    url?: string;
    status: 'ONGOING' | 'FINISHED';
}