import { useEffect } from 'react';
import usePhoenixInit from '../hooks/usePhoenixInit';

const pageHtml = `<nav class="mb-3 breadcrumb-sticky-top" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#!">Pages</a></li>
            <li class="breadcrumb-item active">Timeline</li>
          </ol>
        </nav>
        <h2 class="text-bold mb-5 page-title-sticky-top">Timeline</h2>
        <div class="row gx-xl-8 gx-xxl-11">
          <div class="col-xl-5 p-xxl-7">
            <div class="ms-xxl-3 d-none d-xl-block position-sticky" style="top: 30%"><img class="d-dark-none img-fluid" src="/assets/img/spot-illustrations/timeline.png" alt="" /><img class="d-light-none img-fluid" src="/assets/img/spot-illustrations/timeline-dark.png" alt="" /></div>
          </div>
          <div class="col-xl-7 scrollbar">
            <div>
              <h4 class="py-3 border-y mb-5 ms-8">Today</h4>
              <div class="timeline-basic mb-9">
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-clipboard text-success fs-9"></span></div><span class="timeline-bar border-end border-dashed"></span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Assigned to serve as the <br class='d-sm-none'> project's director</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>4:33pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal mb-3">by <a class="fw-semibold" href="#!">John N. Ward</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-5">Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution.</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-envelope text-danger fs-9"></span></div><span class="timeline-bar border-end border-dashed"></span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Quary about purchased <br class="d-sm-none"> soccer socks</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>6:30pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal mb-3">by <a class="fw-semibold" href="#!">Edward Hopper</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-5">I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount.</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-video text-info fs-9"></span></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Onboarding Meeting</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>9:33pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal false">by <a class="fw-semibold" href="#!">John N. Ward</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 class="py-3 border-y mb-5 ms-8">15 October, 2022</h4>
              <div class="timeline-basic mb-9">
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-swatchbook text-primary fs-9"></span></div><span class="timeline-bar border-end border-dashed"></span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Designing the dungeon</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>1:30pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal mb-3">by <a class="fw-semibold" href="#!">John N. Ward</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-5">To get off the runway and paradigm shift, we should take brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus. </p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-skull-crossbones text-danger fs-9"></span></div><span class="timeline-bar border-end border-dashed"></span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">How to take the headache <br class="d-sm-none"> out of Order</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>8:32pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal mb-3">by <a class="fw-semibold" href="#!">Edward Hopper</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-stethoscope text-primary fs-9"></span></div><span class="timeline-bar border-end border-dashed"></span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Mandatory routine checkup</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>9:30pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal mb-3">by <a class="fw-semibold" href="#!">Eye before Thy Hospital</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-5">To get the bitter butter out and take the better butter into the bitter dough to make a bitter bread and broad donut, not the usual yellow butter, but the white butterless butter.</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-utensils text-success fs-9"></span></div><span class="timeline-bar border-end border-dashed"></span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Making bad butter better</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>8:30pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal mb-3">by <a class="fw-semibold" href="#!">Edward Hopper</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-5">Check how long a fish might live out of water and if you can check the pulse to see if it's alive or not though it's okay to eat fish cause they don't have any feelings.</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-rocket text-info fs-9"></span></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Launching Phoenix</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>10:33pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal false">by <a class="fw-semibold" href="#!">John N. Ward</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 class="py-3 border-y mb-5 ms-8">20 October, 2022</h4>
              <div class="timeline-basic mb-9">
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-screwdriver-wrench text-warning fs-9"></span></div><span class="timeline-bar border-end border-dashed"></span>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">To take the ants out</h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>8:32pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal mb-3">by <a class="fw-semibold" href="#!">Edward Hopper</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-5">Many ants are crawling into my PC and now they live in there to get highly skilled in web development and programming language that will make them earn better than the humans so that they’ll be able to buy off all the sugar out of the market.</p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="row g-3">
                    <div class="col-auto">
                      <div class="timeline-item-bar position-relative">
                        <div class="icon-item icon-item-md rounded-7 border border-translucent"><span class="fa-solid fa-paperclip text-info fs-9"></span></div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex mb-2">
                          <h6 class="lh-sm mb-0 me-2 text-body-secondary timeline-item-title">Added file</h6>
                          <h6 class="mb-0 fs-9"><span class="fa-solid fa-file-pdf me-1 text-body-tertiary"></span><a href="#!">Readme.pdf</a></h6>
                        </div>
                        <p class="text-body-quaternary fs-9 mb-0 text-nowrap timeline-time"><span class="fa-regular fa-clock me-1"></span>10:33pm</p>
                      </div>
                      <h6 class="fs-10 fw-normal false">by <a class="fw-semibold" href="#!">John N. Ward</a></h6>
                      <p class="fs-9 text-body-secondary w-sm-60 mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer position-absolute">
          <div class="row g-0 justify-content-between align-items-center h-100">
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 mt-2 mt-sm-0 text-body">Thank you for creating with Phoenix<span class="d-none d-sm-inline-block"></span><span class="d-none d-sm-inline-block mx-1">|</span><br class="d-sm-none" />2025 &copy;<a class="mx-1" href="https://themewagon.com/">Themewagon</a></p>
            </div>
            <div class="col-12 col-sm-auto text-center">
              <p class="mb-0 text-body-tertiary text-opacity-85">v1.24.0</p>
            </div>
          </div>
        </footer>
      </div>
      <div class="modal fade" id="searchBoxModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="true" data-phoenix-modal="data-phoenix-modal" style="--phoenix-backdrop-opacity: 1;">
        <div class="modal-dialog">
          <div class="modal-content mt-15 rounded-pill">
            <div class="modal-body p-0">
              <div class="search-box navbar-top-search-box" data-list='{"valueNames":["title"]}' style="width: auto;">
                <form class="position-relative" data-bs-toggle="search" data-bs-display="static"><input class="form-control search-input fuzzy-search rounded-pill form-control-lg" type="search" placeholder="Search..." aria-label="Search" />
                  <span class="fas fa-search search-box-icon"></span>
                </form>
                <div class="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none" data-bs-dismiss="search"><button class="btn btn-link p-0" aria-label="Close"></button></div>
                <div class="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                  <div class="scrollbar-overlay" style="max-height: 30rem;">
                    <div class="list pb-3">
                      <h6 class="dropdown-header text-body-highlight fs-10 py-2">24 <span class="text-body-quaternary">results</span></h6>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Recently Searched </h6>
                      <div class="py-2"><a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
                      <div class="py-2"><a class="dropdown-item py-2 d-flex align-items-center" href="/apps/e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="h-100 w-100 object-fit-cover rounded-3" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                          </div>
                        </a>
                        <a class="dropdown-item py-2 d-flex align-items-center" href="/apps/e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="img-fluid" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">30 Sep at 12:30 PM</span></p>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
                      <div class="py-2"><a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
                      <div class="py-2"><a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-image text-body" data-fa-transform="shrink-2"></span> MacBook Pro_13.jpg</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Members</h6>
                      <div class="py-2"><a class="dropdown-item py-2 d-flex align-items-center" href="/members">
                          <div class="avatar avatar-l status-online  me-2 text-body">
                            <img class="rounded-circle " src="/assets/img/team/40x40/10.webp" alt="" />
                          </div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">Carry Anna</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary">anna@technext.it</p>
                          </div>
                        </a>
                        <a class="dropdown-item py-2 d-flex align-items-center" href="/members">
                          <div class="avatar avatar-l  me-2 text-body">
                            <img class="rounded-circle " src="/assets/img/team/40x40/12.webp" alt="" />
                          </div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">John Smith</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary">smith@technext.it</p>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Related Searches</h6>
                      <div class="py-2"><a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="/apps/e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-brands fa-chrome text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="text-center">
                      <p class="fallback fw-bold fs-7 d-none">No Result Found.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;

export default function Timeline() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
