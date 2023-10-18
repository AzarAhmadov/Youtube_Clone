export type VideoI = {
  [x: string]: any;
  videos: VideoProps[];
  class?: string
};

export type VideoProps = {
  kind: string;
  id: Id;
  snippet: VideoSnippet;
};

export type VideoCardProps = {
  video: VideoProps;
};

export type ChannelCardProps = {
  channelDetail: VideoProps;
};

export type Id = {
  kind?: string;
  videoId: string;
};

export type VideoSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

export type VideoDetailI = {
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
  };
  statistics: {
    viewCount?: any;
    likeCount?: any;
  };
};

export type Thumbnails = {
  default: Default;
  medium: Medium;
  high: High;
};

export type Default = {
  url: string;
  width: number;
  height: number;
};

export type Medium = {
  url: string;
  width: number;
  height: number;
};

export type High = {
  url: string;
  width: number;
  height: number;
};
