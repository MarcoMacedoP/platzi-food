import React from "react";

export default () => (
  <footer class="mt-5 w-full bg-secondary left-0 text-white p-3 md:flex md:justify-around md:items-center md:flex-row-reverse">
    <div class="mb-8 md:mb-0">
      <div class=" text-white cursor-pointer hover:text-blue-800 transition transition-colors duration-200 ease-in">
        <i class="fa fa-facebook mr-2"></i> Platzi
      </div>
      <div class=" text-white cursor-pointer hover:text-blue-300 transition transition-colors duration-200 ease-in">
        <i class="fa fa-twitter mr-2"></i>@marcomacedo_
      </div>
      <div class=" text-white cursor-pointer hover:text-purple-500 transition transition-colors duration-200 ease-in">
        <i class="fa fa-instagram mr-2"></i>@marcosiegman
      </div>
    </div>

    <ul class="md:list-disc">
      <li class="cursor-pointer hover:text-primary transition transition-colors ease-linear duration-200">
        Soporte
      </li>
      <li class="cursor-pointer hover:text-primary transition transition-colors ease-linear duration-200">
        Acerca de nosotros
      </li>
      <li class="cursor-pointer hover:text-primary transition transition-colors ease-linear duration-200">
        Registro
      </li>
      <li class="cursor-pointer hover:text-primary transition transition-colors ease-linear duration-200">
        Aviso de privacidad
      </li>
    </ul>
  </footer>
);
