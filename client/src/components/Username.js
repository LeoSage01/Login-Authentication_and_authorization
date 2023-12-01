.glass{
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
    box-shadow: 0 4px 30px #4747470b;
    backdrop-filter: blur(7.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    @apply border-4 border-gray-50  w-[30%] rounded-3xl py-10 px-4 min-w-max;
}

.profile_img{
    @apply border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer;
    @apply hover:border-gray-200;
}

.textbox{
    @apply border-0 px-4 py-2 rounded-xl w-3/4 shadow-sm ;
    @apply focus:outline-none;
}

.btn{
    @apply border bg-purple-600 w-3/4 py-2 rounded-lg text-gray-50 shadow-sm text-center;
}

.btn:hover{
    background-color: #e32983;
}

input[type='file']{
    display: none;
}

@media screen and (max-width: 1000px) {
    /* Styles to apply when the screen width is 600 pixels or less */
    .glass{
        border-radius: 0px;
        border: none;
        @apply content-center w-[30%] px-6 min-w-max;
    }
  }

  
