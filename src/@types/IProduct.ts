import { Document } from 'mongoose';

export interface IProductRequest {
  name: string;
  description: string;
  price: number;
}

export interface IUpdateProductRequest {
  name?: string;
  description?: string;
  price?: number;
}

export interface IProductResponse {
  name: string;
  description: string;
  price: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
}

export interface IProductDocument extends IProduct, Document {
  createdAt: Date;
  updatedAt: Date;
}
