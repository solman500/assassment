/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "@lib/axios-config";
import { AxiosResponse } from "axios";

export class CommonHttpRequests {
  // POST request for insert/update/search
  static async post<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.post(url, data);
    return response.data;
  }

  // PUT request (update by ID or similar)
  static async put<T>(url: string, data: any): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.put(url, data);
    return response.data;
  }

  // GET request (by ID or without query)
  static async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.get(url);
    return response.data;
  }

  // DELETE request
  static async delete<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await axiosClient.delete(url);
    return response.data;
  }

  // GET with query params
  static async getWithQuery<T>(
    url: string,
    queryParams: Record<string, any>
  ): Promise<T> {
    const queryString = Object.entries(queryParams || {})
      .filter(
        ([, value]) => value !== null && value !== "" && value !== undefined
      )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const response: AxiosResponse<T> = await axiosClient.get(fullUrl);
    return response.data;
  }

  // POST with query params
  static async postWithQuery<T>(
    url: string,
    queryParams: Record<string, any>,
    body: any
  ): Promise<T> {
    const queryString = Object.entries(queryParams || {})
      .filter(
        ([, value]) =>
          (value !== null && value !== "" && value !== undefined) ||
          value === false
      )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const response: AxiosResponse<T> = await axiosClient.post(fullUrl, body);
    return response.data;
  }

  // Download file (returns Blob)
  static async downloadFile(
    searchModel: Record<string, any>,
    url: string
  ): Promise<Blob> {
    const queryString = Object.entries(searchModel || {})
      .filter(
        ([, value]) =>
          (value !== null &&
            value !== "" &&
            value !== undefined &&
            value !== 0) ||
          value === false
      )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const response = await axiosClient.get(fullUrl, {
      responseType: "blob",
    });

    return response.data;
  }
}
