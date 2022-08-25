import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const changeColorPicker = (color) => {
  document.getElementById("preview").style.backgroundColor = color.currentValue.hex; 
}

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl dark:bg-secondary-dark-bg">
      <Header category="Приложение:" title="Выбор цвета" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-200">Встроенная палитра</p>

            <ColorPickerComponent
            id="inline-palette"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={changeColorPicker}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-200">Встроенный мазок</p>

            <ColorPickerComponent
            id="inline-palette"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={changeColorPicker}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
