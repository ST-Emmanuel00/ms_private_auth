interface SendResult {
  [x: string]: any;
  message: string;
  info: object; // Propiedad opcional
}

export const useSend = (
  message: string = "Internal Server Error",
  info: object = {}
): SendResult => {
  return {
    message,
    info,
  };
};
