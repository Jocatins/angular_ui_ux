import { Injectable } from "@angular/core";
import { ProductModel } from "./product-model";

@Injectable({
  providedIn: "root",
})
export class InlineEditService {
  total: ProductModel = {
    id: 1,
    inspectorName: "David",
    terminalLocation: "Forest Hills",
    contractType: "PSC",
    vessel: 90,
  };
  AP: ProductModel = {
    id: 2,
    inspectorName: "Jameson",
    terminalLocation: "Forest Hills",
    contractType: "JVC",
    vessel: 120,
  };
  Mobil: ProductModel = {
    id: 3,
    inspectorName: "Donald",
    terminalLocation: "Sammie's Driveway",
    contractType: "JVC",
    vessel: 90,
  };
  Shell: ProductModel = {
    id: 4,
    inspectorName: "Philips",
    terminalLocation: "Joca's Park",
    contractType: "JVC",
    vessel: 60,
  };

  products: ProductModel[] = [this.total, this.AP, this.Mobil, this.Shell];
  constructor() {}
  getProducts() {
    return this.products;
  }
  submitProduct(product: ProductModel) {
    this.products.push(product);
  }
}
