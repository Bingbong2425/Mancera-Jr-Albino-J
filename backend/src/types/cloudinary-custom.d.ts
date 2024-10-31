declare module "cloudinary" {
  import { UploadApiResponse } from "cloudinary-core";

  interface Uploader {
    upload: (file: string, options: object) => Promise<UploadApiResponse>;
    destroy: (
      publicId: string,
      options?: object
    ) => Promise<UploadApiResponse | UploadApiErrorResponse>;
  }

  interface Cloudinary {
    v2: {
      uploader: Uploader;
      config: (options: object) => void;
    };
  }

  const cloudinary: Cloudinary;
  export default cloudinary;
}
