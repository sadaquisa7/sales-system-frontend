import salesApi from "@libs/axios/salesApi.lib";
import { ApiResponse, StateRequest } from "@interfaces/axios/axio.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";

export class BaseService<TData, TCreate = unknown> {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.list = this.list.bind(this);
    this.all = this.all.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.state = this.state.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }

  async list(params?: QueryParams): Promise<ApiResponse<TData>> {
    const response: ApiResponse<TData> = await salesApi.get<TData, QueryParams>(
      `${this.baseUrl}/list`,
      params
    );
    return response;
  }

  async all(): Promise<ApiResponse<TData[]>> {
    const response: ApiResponse<TData[]> = await salesApi.get<TData[]>(
      `${this.baseUrl}/all`
    );
    return response;
  }

  async edit(id: number): Promise<ApiResponse<TData>> {
    const response: ApiResponse<TData> = await salesApi.get<TData>(
      `${this.baseUrl}/${id}`
    );
    return response;
  }

  async delete(id: number): Promise<ApiResponse<undefined>> {
    const response: ApiResponse<undefined> = await salesApi.delete<undefined>(
      `${this.baseUrl}/${id}`
    );
    return response;
  }

  async state(id: number, state: number): Promise<ApiResponse<undefined>> {
    const body: StateRequest = {
      state,
    };
    const response: ApiResponse<undefined> = await salesApi.patch<
      StateRequest,
      undefined
    >(`${this.baseUrl}/state/${id}`, body);
    return response;
  }

  async create(body: TCreate): Promise<ApiResponse<TData>> {
    const response: ApiResponse<TData> = await salesApi.post<TCreate, TData>(
      `${this.baseUrl}/create`,
      body
    );
    return response;
  }

  async update(
    id: number,
    body: Partial<TCreate>
  ): Promise<ApiResponse<TData>> {
    const response: ApiResponse<TData> = await salesApi.post<
      Partial<TCreate>,
      TData
    >(`${this.baseUrl}/update/${id}`, body);
    return response;
  }
}
