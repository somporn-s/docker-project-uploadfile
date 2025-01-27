import { Injectable } from '@nestjs/common'
import * as Minio from 'minio'

@Injectable()
export class MinioService {
    private _minioClient: Minio.Client
    private _bucketName: string = process.env.MINIO_BUCKET_NAME ?? ''

    constructor() {
        this._minioClient = new Minio.Client({
            endPoint: process.env.MINIO_ENDPOINT ?? '',
            port: process.env.MINIO_ENDPOINT
                ? Number(process.env.MINIO_ENDPOINT)
                : 0,
            useSSL: false,
            accessKey: process.env.MINIO_ACCESS_KEY ?? '',
            secretKey: process.env.MINIO_SECRET_KEY ?? '',
        })
    }

    async uploadFile(file: Express.Multer.File) {
        const info = await this._minioClient.putObject(
            this._bucketName,
            file.filename,
            file.buffer,
        )
        return info
    }

    async getFile(fileName: string) {
        const file = await this._minioClient.getObject(
            this._bucketName,
            fileName,
        )
        return file
    }
}
