import { Component, OnInit, OnDestroy } from "@angular/core";

import { BasePageComponent } from "../../base-page";
import { Store } from "@ngrx/store";
import { IAppState } from "../../../interfaces/app-state";
import { HttpService } from "../../../services/http/http.service";
import { InlineEditService } from "./inline-edit.service";
import { ProductModel } from "./product-model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-inline-edit",

  templateUrl: "./inline-edit.component.html",
  styleUrls: ["./inline-edit.component.scss"],
  providers: [InlineEditService],
})
export class InlineEditComponent
  extends BasePageComponent
  implements OnInit, OnDestroy {
  products: ProductModel[];
  id: number;
  inspectorName: string;
  terminalLocation: string;
  contractType: string;
  vessel: number;
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    public editService: InlineEditService
  ) {
    super(store, httpSv);

    this.pageData = {
      title: "Lifting Status",
      loaded: true,
      breadcrumbs: [
        {
          title: "COCIS",
          route: "default-dashboard",
        },

        {
          title: "Inline-Edit",
        },
      ],
    };
    this.products = this.editService.getProducts();
  }
  submitProduct() {
    const newProduct: ProductModel = {
      id: this.id,
      inspectorName: this.inspectorName,
      terminalLocation: this.terminalLocation,
      contractType: this.contractType,
      vessel: this.vessel,
    };

    this.editService.submitProduct(newProduct);
    this.resetForm();
    console.log("data");

    alert("Data Saved Successfully");
  }

  ngOnInit(): void {
    this.resetForm();
    super.ngOnInit();
  }
  resetForm(form?: NgForm) {
    if (form) form.reset();
  }
}
