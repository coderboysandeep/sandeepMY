// /* ==================================== typing animation ==========================*/
// var typed = new typed(".typing",{
//     strings:["","web Designer","web developer","youtuber"],
//     typespeed:100,
//     BackSpeed:60,
//     loop:true
// })
/*============================ aside ===============================*/
// const nav  = document.querySelector(".nav"),
//       navList = nav.querySelectorAll("li"),
//       totalNavList = navList.length;
//       for(let i=0; i<totalNavList; i++)
//       {
         
//           const a = navList[i].querySelector("a");
//           a.addEventListener("click", function()
//           {
//               for(let j=0; j<totalNavList; j++)
//               {
//                   navList[j].querySelector("a").classList.remove("active");
//               }
//               this.classList.add("active")
//               showsection(this);
//           })
//       }
//       function showsection(element)
//       {
//           const target =element.getAttribute("href").split("#")[1];
//           document.querySelector("#" + target).classList.add("active")
//       }
     
       function updateNav(element)
       {
           for(let i=0; i<totalNavList; i++)
           {
               navList[i].querySelector("a").classList.remove("active");
               const target =element.getAttribute("href").split("#")[1];
               if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
               {
                navList[i].querySelector("a").classList.add("active");
               }
           }
       }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          showsection(this);
          updateNav(this);
      })
  const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () =>
  {
      asidesectiontogglerBtn();
  })
  function  asidesectiontogglerBtn()
  {
      aside.classList.toggle("open");
      navTogglerBtn.classList.toggle("open");
      for(let i=0; i<totalsection; i++)
      {
          allsection[i].classList.toggle("open");
      }

  }
