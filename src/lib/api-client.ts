import axios, { AxiosInstance } from "axios";
import { removeTrailingSlash } from "./utils";

export class StrapiClient<T> {
  private axiosInstance: AxiosInstance;
  private collectionName: string;

  constructor(collectionName: string) {
    this.axiosInstance = axios.create({
      baseURL: removeTrailingSlash(
        process.env.CMS_BASE_URL ?? "http://localhost:1337/api"
      ),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.collectionName = collectionName;
  }

  async findAll(params?: Record<string, any>): Promise<T[]> {
    const url = `/${this.collectionName}`;
    const response = await this.axiosInstance.get<{ data: T[] }>(url, {
      params,
    });

    return response.data.data;
  }

  async find(id: string, params?: Record<string, any>): Promise<T> {
    const url = `/${this.collectionName}/${id}`;
    const response = await this.axiosInstance.get<{ data: T }>(url, {
      params,
    });

    return response.data.data;
  }

  async create(data: T): Promise<T> {
    const response = await this.axiosInstance.post<{ data: T }>(
      `/${this.collectionName}`,
      {
        data,
      }
    );
    return response.data.data;
  }

  async update(documentId: string, data: Partial<T>): Promise<T> {
    const response = await this.axiosInstance.put<{ data: T }>(
      `/${this.collectionName}/${documentId}`,
      {
        data,
      }
    );
    return response.data.data;
  }

  async delete(query: { id: string }): Promise<void> {
    await this.axiosInstance.delete(`/${this.collectionName}/${query.id}`);
  }
}
