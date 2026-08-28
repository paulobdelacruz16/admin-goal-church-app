export default async (req, res) => {
  const { app } = await import('../dist/goal-church-app/server/main.js');
  return app(req, res);
};