import { useEffect } from 'react';
import usePhoenixInit from '../hooks/usePhoenixInit';

const pageHtml = `<nav class="mb-3" aria-label="breadcrumb">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="#!">Pages</a></li>
            <li class="breadcrumb-item active">Notifications</li>
          </ol>
        </nav>
        <h2 class="mb-5">Notifications</h2>
        <h5 class="text-body-emphasis mb-3">Today</h5>
        <div class="mx-n4 mx-lg-n6 mb-5 border-bottom">
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3"><img class="rounded-circle" src="/assets/img/team/30.webp" alt="" /></div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>💬</span>Mentioned you in a comment<span class="fw-bold"> &quot;Well done! Proud of you ❤️ &quot; </span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">10m</span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:41 AM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3">
                <div class="avatar-name rounded-circle"><span>J</span></div>
              </div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Jane Foster</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>📅</span>Created an event<span class="fw-bold"> Rome holidays</span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">20m</span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:20 AM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3"><img class="rounded-circle avatar-placeholder" src="/assets/img/team/avatar.webp" alt="" /></div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>👍</span>Liked your comment<span class="fw-bold"> &quot;Amazing Works️&quot;</span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10">1h</span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:30 AM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
            </div>
          </div>
        </div>
        <h5 class="text-semibold text-body-emphasis mb-3">Yesterday</h5>
        <div class="mx-n4 mx-lg-n6 mb-9 border-bottom">
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3"><img class="rounded-circle" src="/assets/img/team/57.webp" alt="" /></div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Kiera Anderson</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>💬</span>Mentioned you in a comment<span class="fw-bold"> &quot;This is too good to be true!&quot;</span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10"></span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:11 AM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top unread">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3"><img class="rounded-circle" src="/assets/img/team/59.webp" alt="" /></div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Herman Carter</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>👤</span>Tagged you in a<span class="fw-bold"> post</span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10"></span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:58 PM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3"><img class="rounded-circle" src="/assets/img/team/58.webp" alt="" /></div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Benjamin Button</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>👍</span>Liked your comment<span class="fw-bold"> &quot;Welcome to the team️&quot;</span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10"></span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:18 AM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3"><img class="rounded-circle" src="/assets/img/team/60.webp" alt="" /></div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Aron Paul</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>📷</span>Tagged you in a<span class="fw-bold"> photo</span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10"></span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:53 AM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-between py-3 px-lg-6 px-4 notification-card border-top read">
            <div class="d-flex">
              <div class="avatar avatar-xl me-3"><img class="rounded-circle" src="/assets/img/team/34.webp" alt="" /></div>
              <div class="me-3 flex-1 mt-2">
                <h4 class="fs-9 text-body-emphasis">Rick Sanchez</h4>
                <p class="fs-9 text-body-highlight"><span class='me-1'>💬</span>Mentioned you in a comment<span class="fw-bold"> &quot;You need to see these amazing photos️&quot;</span><span class="ms-2 text-body-tertiary text-opacity-85 fw-bold fs-10"></span></p>
                <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:45 AM </span>August 7,2021</p>
              </div>
            </div>
            <div class="dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
              <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
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

export default function Notifications() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
