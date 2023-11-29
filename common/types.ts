export interface INews {
  metadata: { tags: [] };
  sys: {
    id: string;
  };
  fields: {
    title: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    content: string;
    date: string;
    pinned: boolean;
  };
}
