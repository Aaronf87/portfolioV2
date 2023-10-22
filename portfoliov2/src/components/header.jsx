

export default function header() {
return (
<><nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-20 items-center justify-between tracking-tight">
              <h1 style="color: rgb(233, 226, 226); background-color: rgba(28, 21, 21, 0.15); backdrop-filter: blur(10px);">By Aaron Flores</h1>
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                -->
                <!--
                  Icon when menu is open.
                  Menu open: "block", Menu closed: "hidden"
                -->
            
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium text-3xl" aria-current="page">About Me</a>
                 
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-3xl">Projects</a>
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-3xl">Contact Me</a>
                </div>
              </div>
            </div>
        </div>
</>


)


}