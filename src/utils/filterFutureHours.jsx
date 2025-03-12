export default function filterFutureHours (forecast)  {
  const currentTimeEpoch = Math.floor(Date.now() / 1000); // Lấy thời gian hiện tại (epoch)
  return forecast.filter((item) => item.time_epoch > currentTimeEpoch);
};
