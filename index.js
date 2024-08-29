$("#carousel-one").owlCarousel({

  items: 1,
  dots: true,
  nav: false,
  autoplay: true,
  dotsEach: true,
  // lazyLoad: true,
  // loop: true,
  margin: 20,
  responsiveClass: true,
  // autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,


  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 1
    }
  }
});
// ----------------carousalTwo-----------------------

  $(document).ready(function () {
    var currentBackgroundIndex = 0;

    // Initialize the Owl Carousel
    $("#carousel-two").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        center:true,
        dots: true,
        autoplay: false, 
        margin:40,
      
        responsive: {
              0: {
                items: 1
              },
          
              600: {
                items: 2
               
              },
          
              1024: {
                items: 3
              },
          
              1366: {
                items: 3
              }
            }
    });


    function updateBackgroundIndex() { 
        currentBackgroundIndex = (currentBackgroundIndex + 1) % 2; 
    }

    $('.slide-prev-2').click(function () {
        $('#carousel-two').trigger('prev.owl.carousel'); // Move to the previous item
        updateBackgroundIndex();
         {
            $('.slide-next-img').attr('src', './assets/group2right.svg'); 
            $('.slide-prev-img').attr('src', './assets/group1left.svg'); 
        } 
       
    });

    $('.slide-next-2').click(function () {
        $('#carousel-two').trigger('next.owl.carousel'); // Move to the next item
        updateBackgroundIndex();
        {
            $('.slide-prev-img').attr('src', './assets/group2left.svg'); 
            $('.slide-next-img').attr('src', './assets/group1right.svg'); 
        } 
       
    });
});


//<------------------------------- counter + progress bar-------------------------->
document.addEventListener('DOMContentLoaded', function() {
  // Select the container for the tabs and associated elements
  const tabsContainer = document.querySelector('.facilities-tabs');

  // Select all tab buttons within the specific container
  const tabs = tabsContainer.querySelectorAll('.nav-link');
  // Select the counter and progress bar elements within the specific container
  const tabCounter = tabsContainer.querySelector('#counter');
  const progressBar = tabsContainer.querySelector('#progressbar');
  const totalTabs = tabs.length;

  // Define an array of heights for each tab (customize these values as needed)
  const tabHeights = [70, 140, 210, 280, 350]; // Example heights in pixels

  // Function to update counter and progress bar based on the active tab index
  function updateProgress(index) {
    // Update counter text
    tabCounter.textContent = `${index + 1}/${totalTabs}`;
    // Calculate progress percentage
    const progressPercentage = ((index + 1) / totalTabs) * 100;
    // Update progress bar width (fixed to 100%)
    progressBar.style.width = `100%`;
    // Update progress bar height based on the current tab index
    const height = tabHeights[index] || 4; // Default height if index is out of bounds
    progressBar.style.height = `${height}px`;
    // Update ARIA attributes
    progressBar.setAttribute('aria-valuenow', progressPercentage);
  }

  // Set up click event listeners for each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function() {
      // Update the progress based on the clicked tab
      updateProgress(index);
    });
  });

  // Handle tab change through Bootstrap's tab events
  const tabList = tabsContainer.querySelector('#v-pills-tab');

  tabList.addEventListener('shown.bs.tab', function(event) {
    const index = Array.from(tabs).indexOf(event.target);
    updateProgress(index);
  });

  // Initialize progress and counter based on the initially active tab
  const activeTab = tabsContainer.querySelector('.nav-link.active');
  const initialIndex = Array.from(tabs).indexOf(activeTab);
  updateProgress(initialIndex);
});
// <---------------------------------carousal three---------------------------->
$(document).ready(function () {
$("#carousel-three").owlCarousel({
  // items: 4,
  loop: true,
  nav: false,
  center:true,
  dots: false,
  responsiveClass: true,
  // autoHeight: true,
  // autoplayTimeout: 7000,
  // smartSpeed: 800,
  autoWidth:true,
  margin:80,
  // autoplay: true, 
 
stagePadding:50,
  responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 2
         
        },
        700: {
          items: 2
         
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        
        }
      }
});
var currentBackgroundIndex = 0;
function updateBackgroundIndex() { 
  currentBackgroundIndex = (currentBackgroundIndex + 1) % 2; 
}

$('.slide-prev-3').click(function () {
  $('#carousel-three').trigger('prev.owl.carousel'); // Move to the previous item
  updateBackgroundIndex();
   {
      $('.slide-next-img').attr('src', './assets/group2right.svg'); 
      $('.slide-prev-img').attr('src', './assets/group1left.svg'); 
  } 
});

$('.slide-next-3').click(function () {
  $('#carousel-three').trigger('next.owl.carousel'); // Move to the next item
  updateBackgroundIndex();
  {
      $('.slide-prev-img').attr('src', './assets/group2left.svg'); 
      $('.slide-next-img').attr('src', './assets/group1right.svg'); 
  } 

});
});
// <--------------------------------- Brand carousal ---------------------------->
$("#brand-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: false,
  center:true,
  dots: false,
  autoplay: true, 
  margin:40,

  responsive: {
        0: {
          items: 3
        },
    
        600: {
          items: 4
         
        },
    
        1024: {
          items: 4
        },
    
        1366: {
          items: 6
        }
      }
});
// <--------------------------------- Review carousal ---------------------------->
$(document).ready(function () {
$("#review-carousel").owlCarousel({
  // items: 4,
  loop: true,
  nav: false,
  center:true,
  dots: true,
  responsiveClass: true,
  // autoHeight: true,
  // autoplayTimeout: 7000,
  // smartSpeed: 800,
  autoWidth:true,
  margin:40,
  // autoplay: true, 
 
// stagePadding:50,
  responsive: {
        0: {
          items: 1
        },
    
        600: {
          items: 2
         
        },
        700: {
          items: 2
         
        },
    
        1024: {
          items: 3
        },
    
        1366: {
          items: 3
        
        }
      }
});
var currentBackgroundIndex = 0;
function updateBackgroundIndex() { 
  currentBackgroundIndex = (currentBackgroundIndex + 1) % 2; 
}

$('.slide-prev').click(function () {
  $('#review-carousel').trigger('prev.owl.carousel'); // Move to the previous item
  updateBackgroundIndex();
   {
      $('.slide-next-img').attr('src', './assets/group2right.svg'); 
      $('.slide-prev-img').attr('src', './assets/group1left.svg'); 
  } 
});

$('.slide-next').click(function () {
  $('#review-carousel').trigger('next.owl.carousel'); // Move to the next item
  updateBackgroundIndex();
  {
      $('.slide-prev-img').attr('src', './assets/group2left.svg'); 
      $('.slide-next-img').attr('src', './assets/group1right.svg'); 
  } 

});
});

