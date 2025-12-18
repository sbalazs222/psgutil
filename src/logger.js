import c from "./colors.js";

const statusColor = (statusCode) => {
  if (statusCode >= 500) return c.purple;
  if (statusCode >= 400) return c.red;
  if (statusCode >= 300) return c.cyan;
  return c.green;
};

function colorLog(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (req.originalUrl !== '/healthcheck') {
      const timestamp = new Date().toLocaleString('hu-HU').replace(',', '');
      console.log(
        `${c.gray}${timestamp}${c.reset} - ` +
        `${c.blue}${req.method}${c.reset} ` +
        `${c.cyan}${req.originalUrl}${c.reset} - ` +
        `${statusColor(res.statusCode)}${res.statusCode}${c.reset} from ` +
        `${c.yellow}${req.ip}${c.reset} ${c.gray}(${duration}ms)${c.reset}`
      );
    }
  });
  next();
}

function errorLog(error, req, res, next) {
  console.error(`${c.red}Error:${c.reset} ${error.message}\n${c.gray}${error.stack}${c.reset}`);
  if (res.headersSent) return next(error);
  res.status(500).send('Internal Server Error');
}

export { colorLog, errorLog }