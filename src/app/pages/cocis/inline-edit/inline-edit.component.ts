import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import {
  DataSourceChangedEventArgs,
  DataStateChangeEventArgs,
  EditSettingsModel,
  IEditCell,
  PageSettingsModel,
  SaveEventArgs,
  ToolbarItems,
} from "@syncfusion/ej2-angular-grids";
import { BasePageComponent } from "../../base-page";
import { Store } from "@ngrx/store";
import { IAppState } from "../../../interfaces/app-state";
import { HttpService } from "../../../services/http/http.service";
import { Observable } from "rxjs";
import { ProductStoreService } from "./product-store.service";
import { Internationalization } from "@syncfusion/ej2-base";

@Component({
  selector: "app-inline-edit",

  templateUrl: "./inline-edit.component.html",
  styleUrls: ["./inline-edit.component.scss"],
})
export class InlineEditComponent
  extends BasePageComponent
  implements OnInit, OnDestroy {
  public pageSettings: PageSettingsModel = { pageSize: 4 };
  public products: Observable<DataStateChangeEventArgs>;
  public editSettings: EditSettingsModel;
  public numParams: IEditCell = { params: { format: "C" } };
  public toolbar: ToolbarItems[];
  public orderData: object;
  public val: any;
  public Intl: Internationalization = new Internationalization();

  // ------------------------------- SAVE EVENT ARGS--------------------------------------------------------------->
  actionBegin(args: SaveEventArgs) {
    if (args.requestType === "beginEdit" || args.requestType === "add") {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === "save") {
      const Validity = "Validity";
      args.data[Validity] = this.orderData[Validity];
    }
  }
  // ------------------------------------------------------------------------------------------------->
  // ---------------------------- DATE FORMATTER METHOD ------------------------------------------------------->
  public dateformatter = (value: any) => {
    let dFormatter: Function = this.Intl.getDateFormat({
      skeleton: "y",
      type: "date",
    });
    return dFormatter(new Date(value));
  };
  // ---------------------------------------------------------------------------------------------------------->
  public valueAccess = (field: string, value: object, column: object) => {
    this.val =
      this.dateformatter(new Date(value[field][0])) +
      " - " +
      this.dateformatter(new Date(value[field][1]));
    return this.val;
  };
  // ---------------------------- PAGE ROUTING SERVICES ------------------------------------------------
  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    public productservice: ProductStoreService
  ) {
    super(store, httpSv);
    this.products = productservice;
    this.pageData = {
      title: "Inline Edit",
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
  }
  // ------------------------- END -------------------------------------------------------------->
  ngOnInit(): void {
    const state: any = { skip: 0, take: 5 };
    this.editSettings = {
      allowAdding: true,
      allowDeleting: true,
      allowEditing: true,
      mode: "Normal",
      newRowPosition: "Bottom",
    };
    this.toolbar = ["Add", "Delete", "Edit", "Update", "Cancel"];
    this.productservice.execute(state);
    super.ngOnInit();
  }
  // ---------------------- DATA STATE CHANGE EVENT ARGS --------------------------------------->
  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.productservice.execute(state);
  }
  // -------------------------------------------------------------------------------------------->
  // ------------------------- DATA SOURCE CHANGED EVENT ARGS WITH CRUD ---------------------------------------->
  public dataSourceChanged(state: DataSourceChangedEventArgs): void {
    if (state.action === "add") {
      this.productservice.addRecord(state).subscribe(() => {
        state.endEdit();
      });
    } else if (state.action === "edit") {
      this.productservice.updateRecord(state).subscribe(() => {
        state.endEdit();
      });
    } else if (state.requestType === "delete") {
      this.productservice.deleteRecord(state).subscribe(() => {
        state.endEdit();
      });
    }
  }
  // -------------------------------------------------------------------------------------------------------------->
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
