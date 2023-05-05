import { rest } from 'msw';

export const handlers = [
  rest.get('http://example.com/articles', (req, res, ctx) => {
    console.log("hello world");
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: "1",
            title: "Article 1",
            content: "Content 1"
          },
          {
            id: "2",
            title: "Article 2",
            content: "Content 2"
          },
          {
            id: "3",
            title: "Article 3",
            content: "Content 3"
          },
        ]
      })
    )
  }),
]