import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/Layout.tsx",
    [
      index("routes/home.tsx"),
      route("pile", "routes/pile.tsx"),
      route("concrete-lifting", "routes/concrete-lifting.tsx"),
      route("wood-lifting", "routes/wood-lifting.tsx"),
      route("house-moving", "routes/house-moving.tsx"),
    ]
  ),

] satisfies RouteConfig;
