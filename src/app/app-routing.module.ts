import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: ()=>import("./modules/home/home.module").then(m=>m.HomeModule)},
  {path: "notes", loadChildren: ()=>import("./modules/notes/notes.module").then(m=>m.NotesModule)},
  {path: "to-do", loadChildren: ()=>import("./modules/to-do-list/to-do-list.module").then(m=>m.ToDoListModule)},
  {path: "weather", loadChildren: ()=>import("./modules/weather/weather.module").then(m=>m.WeatherModule)},
  {path: "toast", loadChildren: ()=>import("./modules/toast-notif/toast-notif.module").then(m=>m.ToastNotifModule)},
  {path: "rps-game", loadChildren: ()=>import("./modules/rps-game/rps-game.module").then(m=>m.RpsGameModule)},
  {path: "quote-gen", loadChildren: ()=>import("./modules/quote-gen/quote-gen.module").then(m=>m.QuoteGenModule)},
  {path: "piano", loadChildren: ()=>import("./modules/piano/piano.module").then(m=>m.PianoModule)},
  {path: "paint", loadChildren: ()=>import("./modules/paint/paint.module").then(m=>m.PaintModule)},
  {path: "filter", loadChildren: ()=>import("./modules/filter/filter.module").then(m=>m.FilterModule)},
  {path: "magic-8", loadChildren: ()=>import("./modules/eight-ball/eight-ball.module").then(m=>m.EightBallModule)},
  {path: "drum", loadChildren: ()=>import("./modules/drum-kit/drum-kit.module").then(m=>m.DrumKitModule)},
  {path: "color-gen", loadChildren: ()=>import("./modules/color-gen/color-gen.module").then(m=>m.ColorGenModule)},
  {path: "clock", loadChildren: ()=>import("./modules/clock/clock.module").then(m=>m.ClockModule)},
  {path: "calc", loadChildren: ()=>import("./modules/calc/calc.module").then(m=>m.CalcModule)},
  {path: "theme", loadChildren: ()=>import("./modules/dark-mode/dark-mode.module").then(m=>m.DarkModeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
