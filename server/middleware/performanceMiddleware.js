const performanceMiddleware = (req, res, next) => {
  const start = Date.now();
  
  // Add performance data to response
  res.on('finish', () => {
    const duration = Date.now() - start;
    const { method, url, statusCode } = req;
    
    console.log(`[PERFORMANCE] ${method} ${url} - ${statusCode} - ${duration}ms`);
    
    // Log slow requests (over 1 second)
    if (duration > 1000) {
      console.warn(`[SLOW REQUEST] ${method} ${url} took ${duration}ms`);
    }
  });
  
  next();
};

module.exports = performanceMiddleware; 