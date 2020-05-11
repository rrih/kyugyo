export type KyugyoType = {
    _id: any;
    id: string;
    storeName: string;
    isClosed: boolean;
    address: string;
    access: string;
    createdAt: string;
    updatedAt: string;
    hpUrl: string;
    misc: string;
    comments: CommentPostType[];
}

export type CommentPostType = {
    id: string;
    text: string;
    author: string;
    kyugyo: any;
}