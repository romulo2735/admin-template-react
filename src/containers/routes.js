import Cards from "../components/Cards";
import Forms from "../components/Forms";
import Charts from "../components/Charts";
import Dashboard from "../components/Dashboard";
import DataTables from "../components/DataTables";

const Routes = () => [
  {
    path: "/dashboard",
    name: "Dashboard",
    template: Dashboard,
  },
  {
    path: "/cards",
    name: "Cards",
    template: Cards,
  },
  {
    path: "/forms",
    name: "Forms",
    template: Forms,
  },
  {
    path: "/charts",
    name: "Charts",
    template: Charts,
  },
  {
    path: "/datatables",
    name: "Datatables",
    template: DataTables,
  },
];

export default Routes();
