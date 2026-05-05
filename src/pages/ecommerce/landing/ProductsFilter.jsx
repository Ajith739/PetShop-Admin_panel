import { useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';

const pageHtml = `<!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="py-0">
        <div class="container-small">
          <div class="ecommerce-topbar">
            <nav class="navbar navbar-expand-lg navbar-light px-0">
              <div class="row gx-0 gy-2 w-100 flex-between-center">
                <div class="col-auto"><a class="text-decoration-none" href="/">
                    <div class="d-flex align-items-center"><img src="/assets/img/icons/logo.png" alt="phoenix" width="27" />
                      <h5 class="logo-text ms-2">phoenix</h5>
                    </div>
                  </a></div>
                <div class="col-auto order-md-1">
                  <ul class="navbar-nav navbar-nav-icons flex-row me-n2">
                    <li class="nav-item d-flex align-items-center">
                      <div class="theme-control-toggle feather-icon-wait px-2"><input class="form-check-input ms-0 theme-control-toggle-input" type="checkbox" data-theme-control="phoenixTheme" value="dark" id="themeControlToggle" /><label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style="height:32px;width:32px;"><span class="icon" data-feather="moon"></span></label><label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Switch theme" style="height:32px;width:32px;"><span class="icon" data-feather="sun"></span></label></div>
                    </li>
                    <li class="nav-item feather-icon-wait" style="height: 40px;"><a class="nav-link px-2 icon-indicator icon-indicator-primary" href="cart" role="button"><span class="text-body-tertiary" data-feather="shopping-cart" style="height:20px;width:20px;"></span><span class="icon-indicator-number">3</span></a></li>
                    <li class="nav-item dropdown feather-icon-wait" style="height: 40px;"><a class="nav-link px-2 icon-indicator icon-indicator-sm icon-indicator-danger" id="navbarTopDropdownNotification" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span class="text-body-tertiary" data-feather="bell" style="height:20px;width:20px;"></span></a>
                      <div class="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret mt-2" id="navbarDropdownNotfication" aria-labelledby="navbarDropdownNotfication">
                        <div class="card position-relative border-0">
                          <div class="card-header p-2">
                            <div class="d-flex justify-content-between">
                              <h5 class="text-body-emphasis mb-0">Notifications</h5><button class="btn btn-link p-0 fs-9 fw-normal" type="button">Mark all as read</button>
                            </div>
                          </div>
                          <div class="card-body p-0">
                            <div class="scrollbar-overlay" style="height: 27rem;">
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/30.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>💬</span>Mentioned you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">10m</span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:41 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3">
                                      <div class="avatar-name rounded-circle"><span>J</span></div>
                                    </div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Jane Foster</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>📅</span>Created an event.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">20m</span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:20 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle avatar-placeholder" src="/assets/img/team/40x40/avatar.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Jessie Samson</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>👍</span>Liked your comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">1h</span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:30 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/57.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Kiera Anderson</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>💬</span>Mentioned you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">9:11 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/59.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Herman Carter</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>👤</span>Tagged you in a comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:58 PM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                <div class="d-flex align-items-center justify-content-between position-relative">
                                  <div class="d-flex">
                                    <div class="avatar avatar-m status-online me-3"><img class="rounded-circle" src="/assets/img/team/40x40/58.webp" alt="" /></div>
                                    <div class="flex-1 me-sm-3">
                                      <h4 class="fs-9 text-body-emphasis">Benjamin Button</h4>
                                      <p class="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal"><span class='me-1 fs-10'>👍</span>Liked your comment.<span class="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10"></span></p>
                                      <p class="text-body-secondary fs-9 mb-0"><span class="me-1 fas fa-clock"></span><span class="fw-bold">10:18 AM </span>August 7,2021</p>
                                    </div>
                                  </div>
                                  <div class="dropdown notification-dropdown"><button class="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h fs-10 text-body"></span></button>
                                    <div class="dropdown-menu py-2"><a class="dropdown-item" href="#!">Mark as unread</a></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer p-0 border-top border-translucent border-0">
                            <div class="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85"><a class="fw-bolder" href="/notifications">Notification history</a></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item dropdown feather-icon-wait" style="height: 40px;"><a class="nav-link px-2" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false"><span class="text-body-tertiary" data-feather="user" style="height:20px;width:20px;"></span></a>
                      <div class="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border mt-2" aria-labelledby="navbarDropdownUser">
                        <div class="card position-relative border-0">
                          <div class="card-body p-0">
                            <div class="text-center pt-4 pb-3">
                              <div class="avatar avatar-xl ">
                                <img class="rounded-circle " src="/assets/img/team/72x72/57.webp" alt="" />
                              </div>
                              <h6 class="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                            </div>
                            <div class="mb-3 mx-3"><input class="form-control form-control-sm" id="statusUpdateInput" type="text" placeholder="Update your status" /></div>
                          </div>
                          <div class="overflow-auto scrollbar" style="height: 10rem;">
                            <ul class="nav d-flex flex-column mb-2 pb-1">
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="user"></span><span>Profile</span></a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"><span class="me-2 text-body align-bottom" data-feather="pie-chart"></span>Dashboard</a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="lock"></span>Posts &amp; Activity</a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="settings"></span>Settings &amp; Privacy </a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="help-circle"></span>Help Center</a></li>
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="globe"></span>Language</a></li>
                            </ul>
                          </div>
                          <div class="card-footer p-0 border-top border-translucent">
                            <ul class="nav d-flex flex-column my-3">
                              <li class="nav-item"><a class="nav-link px-3 d-block" href="#!"> <span class="me-2 text-body align-bottom" data-feather="user-plus"></span>Add another account</a></li>
                            </ul>
                            <hr />
                            <div class="px-3"> <a class="btn btn-phoenix-secondary d-flex flex-center w-100" href="#!"> <span class="me-2" data-feather="log-out"> </span>Sign out</a></div>
                            <div class="my-2 text-center fw-bold fs-10 text-body-quaternary"><a class="text-body-quaternary me-1" href="#!">Privacy policy</a>&bull;<a class="text-body-quaternary mx-1" href="#!">Terms</a>&bull;<a class="text-body-quaternary ms-1" href="#!">Cookies</a></div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-12 col-md-6">
                  <div class="search-box ecommerce-search-box w-100">
                    <form class="position-relative"><input class="form-control search-input search form-control-sm" type="search" placeholder="Search" aria-label="Search" />
                      <span class="fas fa-search search-box-icon"></span>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div><!-- end of .container-->
      </section><!-- <section> close ============================-->
      <!-- ============================================-->

      <nav class="navbar-responsive-navitems navbar-expand navbar-light bg-body-emphasis justify-content-between">
        <div class="container-small d-flex flex-between-center" data-navbar="data-navbar">
          <div class="dropdown feather-icon-wait"><button class="btn text-body ps-0 pe-5 text-nowrap dropdown-toggle dropdown-caret-none" data-category-btn="data-category-btn" data-bs-toggle="dropdown"><span class="fas fa-bars me-2"></span>Category</button>
            <div class="dropdown-menu border border-translucent py-0 category-dropdown-menu">
              <div class="card border-0 scrollbar" style="max-height: 657px;">
                <div class="card-body p-6 pb-3">
                  <div class="row gx-7 gy-5 mb-5">
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="pocket" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Collectibles &amp; Art</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Collectibles</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Antiques</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Sports memorabilia </a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Art</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="home" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Home &amp; Gardan</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Yard, Garden &amp; Outdoor</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Crafts</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Home Improvement</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Pet Supplies</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="globe" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Sporting Goods</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Outdoor Sports</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Team Sports</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Exercise &amp; Fitness</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Golf</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="monitor" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Electronics</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Computers &amp; Tablets</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Camera &amp; Photo</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">TV, Audio &amp; Surveillance</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Cell Ohone &amp; Accessories</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="truck" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Auto Parts &amp; Accessories</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">GPS &amp; Security Devices</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Rader &amp; Laser Detectors</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Care &amp; Detailing</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Scooter Parts &amp; Accessories</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="codesandbox" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Toys &amp; Hobbies</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Radio Control</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Kids Toys</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Action Figures</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Dolls &amp; Bears</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="watch" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Fashion</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Women</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Men</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Jewelry &amp; Watches</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Shoes</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="music" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Musical Instruments &amp; Gear</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Guitar</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Pro Audio Equipment</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">String</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Stage Lighting &amp; Effects</a></div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4">
                      <div class="d-flex align-items-center mb-3"><span class="text-primary me-2" data-feather="grid" style="stroke-width:3;"></span>
                        <h6 class="text-body-highlight mb-0 text-nowrap">Other Categories</h6>
                      </div>
                      <div class="ms-n2"><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Video Games &amp; Consoles</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Health &amp; Beauty</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Baby</a><a class="text-body-emphasis d-block mb-1 text-decoration-none bg-body-highlight-hover px-2 py-1 rounded-2" href="#!">Business &amp; Industrial</a></div>
                    </div>
                  </div>
                  <div class="text-center border-top border-translucent pt-3"><a class="fw-bold" href="#!">See all Categories<span class="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a></div>
                </div>
              </div>
            </div>
          </div>
          <ul class="navbar-nav justify-content-end align-items-center">
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link ps-0" href="homepage">Home</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="favourite-stores">My Favourite Stores</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link active" href="products-filter">Products</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="wishlist">Wishlist</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="shipping-info">Shipping Info</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="../admin/add-product">Be a vendor</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link" href="order-tracking">Track order</a></li>
            <li class="nav-item invisible" data-nav-item="data-nav-item"><a class="nav-link pe-0" href="checkout">Checkout</a></li>
            <li class="nav-item dropdown" data-nav-item="data-nav-item" data-more-item="data-more-item"><a class="nav-link dropdown-toggle dropdown-caret-none fw-bold pe-0" href="javascript: void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-boundary="window" data-bs-reference="parent"> More<span class="fas fa-angle-down ms-2"></span></a>
              <div class="dropdown-menu dropdown-menu-end category-list" aria-labelledby="navbarDropdown" data-category-list="data-category-list"></div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- ============================================-->
      <!-- <section> begin ============================-->
      <section class="pt-5 pb-9">
        <div class="product-filter-container"><button class="btn btn-sm btn-phoenix-secondary text-body-tertiary mb-5 d-lg-none" data-phoenix-toggle="offcanvas" data-phoenix-target="#productFilterColumn"><span class="fa-solid fa-filter me-2"></span>Filter</button>
          <div class="row">
            <div class="col-lg-3 col-xxl-2 ps-2 ps-xxl-3">
              <div class="phoenix-offcanvas-filter bg-body scrollbar phoenix-offcanvas phoenix-offcanvas-fixed" id="productFilterColumn" style="top: 92px" data-breakpoint="lg">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h3 class="mb-0">Filters</h3><button class="btn d-lg-none p-0" data-phoenix-dismiss="offcanvas"><span class="uil uil-times fs-8"></span></button>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseAvailability" role="button" aria-expanded="true" aria-controls="collapseAvailability">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Availability</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseAvailability">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="inStockInput" type="checkbox" name="color" checked><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="inStockInput">In stock</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="preBookInput" type="checkbox" name="color"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="preBookInput">Pre-book</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="outOfStockInput" type="checkbox" name="color"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="outOfStockInput">Out of stock</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseColorFamily" role="button" aria-expanded="true" aria-controls="collapseColorFamily">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Color family</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseColorFamily">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckBlack" type="checkbox" name="color" checked><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flexCheckBlack">Black</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckBlue" type="checkbox" name="color"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flexCheckBlue">Blue</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckRed" type="checkbox" name="color"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flexCheckRed">Red</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseBrands" role="button" aria-expanded="true" aria-controls="collapseBrands">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Brands</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseBrands">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckBlackberry" type="checkbox" name="brands" checked><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flexCheckBlackberry">Blackberry
                      </label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckApple" type="checkbox" name="brands"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flexCheckApple">Apple
                      </label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckNokia" type="checkbox" name="brands"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flexCheckNokia">Nokia
                      </label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckSony" type="checkbox" name="brands"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flexCheckSony">Sony
                      </label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flexCheckLG" type="checkbox" name="brands"><label class="form-check-label d-block lh-sm fs-8 text-body mb-0 fw-normal" for="flexCheckLG">LG
                      </label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapsePriceRange" role="button" aria-expanded="true" aria-controls="collapsePriceRange">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Price range</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapsePriceRange">
                  <div class="d-flex justify-content-between mb-3">
                    <div class="input-group me-2"><input class="form-control" type="text" aria-label="First name" placeholder="Min"><input class="form-control" type="text" aria-label="Last name" placeholder="Max"></div><button class="btn btn-phoenix-primary px-3" type="button">Go</button>
                  </div>
                </div><a class="btn px-0 y-4 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseRating" role="button" aria-expanded="true" aria-controls="collapseRating">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Rating</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseRating">
                  <div class="d-flex align-items-center mb-1"><input class="form-check-input me-3" id="flexRadio1" type="radio" name="flexRadio"><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span></div>
                  <div class="d-flex align-items-center mb-1"><input class="form-check-input me-3" id="flexRadio2" type="radio" name="flexRadio"><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
                    <p class="ms-1 mb-0">&amp; above</p>
                  </div>
                  <div class="d-flex align-items-center mb-1"><input class="form-check-input me-3" id="flexRadio3" type="radio" name="flexRadio"><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
                    <p class="ms-1 mb-0">&amp; above </p>
                  </div>
                  <div class="d-flex align-items-center mb-1"><input class="form-check-input me-3" id="flexRadio4" type="radio" name="flexRadio"><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
                    <p class="ms-1 mb-0">&amp; above</p>
                  </div>
                  <div class="d-flex align-items-center mb-3"><input class="form-check-input me-3" id="flexRadio5" type="radio" name="flexRadio"><span class="fa fa-star text-warning fs-9 me-1"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span><span class="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light"></span>
                    <p class="ms-1 mb-0">&amp; above </p>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseDisplayType" role="button" aria-expanded="true" aria-controls="collapseDisplayType">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Display type</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseDisplayType">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="lcdInput" type="checkbox" name="displayType" checked><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="lcdInput">LCD</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="ipsInput" type="checkbox" name="displayType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="ipsInput">IPS</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="oledInput" type="checkbox" name="displayType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="oledInput">OLED</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="amoledInput" type="checkbox" name="displayType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="amoledInput">AMOLED</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="retinaInput" type="checkbox" name="displayType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="retinaInput">Retina</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCondition" role="button" aria-expanded="true" aria-controls="collapseCondition">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Condition</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseCondition">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="newInput" type="checkbox" name="condition" checked><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="newInput">New</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="usedInput" type="checkbox" name="condition"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="usedInput">Used</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="refurbrishedInput" type="checkbox" name="condition"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="refurbrishedInput">Refurbrished</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseDelivery" role="button" aria-expanded="true" aria-controls="collapseDelivery">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Delivery</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseDelivery">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="freeShippingInput" type="checkbox" name="delivery" checked><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="freeShippingInput">Free Shipping</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="oneDayShippingInput" type="checkbox" name="delivery"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="oneDayShippingInput">One-day Shipping</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="codInput" type="checkbox" name="delivery"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="codInput">Cash on Delivery</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCampaign" role="button" aria-expanded="true" aria-controls="collapseCampaign">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Campaign</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseCampaign">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="summerSaleInput" type="checkbox" name="campaign"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="summerSaleInput">Summer Sale</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="marchMadnessInput" type="checkbox" name="campaign"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="marchMadnessInput">March Madness</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="flashSaleInput" type="checkbox" name="campaign"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="flashSaleInput">Flash Sale</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="bogoBlastInput" type="checkbox" name="campaign"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="bogoBlastInput">BOGO Blast</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseWarranty" role="button" aria-expanded="true" aria-controls="collapseWarranty">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Warranty</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseWarranty">
                  <div class="mb-2">
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="threeMonthInput" type="checkbox" name="warranty"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="threeMonthInput">3 months</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="sixMonthInput" type="checkbox" name="warranty"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="sixMonthInput">6 months</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="oneYearInput" type="checkbox" name="warranty"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="oneYearInput">1 year</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="twoYearsInput" type="checkbox" name="warranty"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="twoYearsInput">2 years</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="threeYearsInput" type="checkbox" name="warranty"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="threeYearsInput">3 years</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="fiveYearsInput" type="checkbox" name="warranty"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="fiveYearsInput">5 years</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseWarrantyType" role="button" aria-expanded="true" aria-controls="collapseWarrantyType">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Warranty Type</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseWarrantyType">
                  <div class="mb-2">
                    <div class="form-check mb-0x"><input class="form-check-input mt-0" id="replacementInput" type="checkbox" name="warrantyType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="replacementInput">Replacement</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="serviceInput" type="checkbox" name="warrantyType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="serviceInput">Service</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="partialCoveregeInput" type="checkbox" name="warrantyType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="partialCoveregeInput">Partial Coverage</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="appleCareInput" type="checkbox" name="warrantyType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="appleCareInput">Apple Care</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="moneyBackInput" type="checkbox" name="warrantyType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="moneyBackInput">Money back</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="extendableInput" type="checkbox" name="warrantyType"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="extendableInput">Extendable</label></div>
                  </div>
                </div><a class="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCertification" role="button" aria-expanded="true" aria-controls="collapseCertification">
                  <div class="d-flex align-items-center justify-content-between w-100">
                    <div class="fs-8 text-body-highlight">Certification</div><span class="fa-solid fa-angle-down toggle-icon text-body-quaternary"></span>
                  </div>
                </a>
                <div class="collapse show" id="collapseCertification">
                  <div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="rohsInput" type="checkbox" name="certification"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="rohsInput">RoHS</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="fccInput" type="checkbox" name="certification"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="fccInput">FCC</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="conflictInput" type="checkbox" name="certification"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="conflictInput">Conflict Free</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="isoOneInput" type="checkbox" name="certification"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="isoOneInput">ISO 9001:2015</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="isoTwoInput" type="checkbox" name="certification"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="isoTwoInput">ISO 27001:2013</label></div>
                    <div class="form-check mb-0"><input class="form-check-input mt-0" id="isoThreeInput" type="checkbox" name="certification"><label class="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" for="isoThreeInput">IEC 61000-4-2</label></div>
                  </div>
                </div>
              </div>
              <div class="phoenix-offcanvas-backdrop d-lg-none" data-phoenix-backdrop style="top: 92px"></div>
            </div>
            <div class="col-lg-9 col-xxl-10">
              <div class="row gx-3 gy-6 mb-8">
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/6.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">PlayStation 5 DualSense Wireless Controller</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(67 people rated)</span></p>
                        </div>
                        <div>
                          <p class="fs-9 text-body-tertiary mb-2">dbrand skin available</p>
                          <div class="d-flex align-items-center mb-1">
                            <p class="me-2 text-body text-decoration-line-through mb-0">$125.00</p>
                            <h3 class="text-body-emphasis mb-0">$89.00</h3>
                          </div>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/1.png" alt="" /><span class="badge text-bg-success fs-10 product-verified-badge">Verified<span class="fas fa-check ms-1"></span></span></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature ...</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(74 people rated)</span></p>
                        </div>
                        <div>
                          <div class="d-flex align-items-center mb-1">
                            <p class="me-2 text-body text-decoration-line-through mb-0">$49.99</p>
                            <h3 class="text-body-emphasis mb-0">$34.99</h3>
                          </div>
                          <p class="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/2.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">iPhone 13 pro max-Pacific Blue, 128GB storage</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(33 people rated)</span></p>
                        </div>
                        <div>
                          <p class="fs-9 text-body-highlight fw-bold mb-2">Stock limited</p>
                          <div class="d-flex align-items-center mb-1">
                            <p class="me-2 text-body text-decoration-line-through mb-0">$899.99</p>
                            <h3 class="text-body-emphasis mb-0">$850.99</h3>
                          </div>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">5 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/3.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(97 people rated)</span></p>
                        </div>
                        <div>
                          <p class="fs-9 text-body-highlight fw-bold mb-2">Apple care included</p>
                          <div class="d-flex align-items-center mb-1">
                            <p class="me-2 text-body text-decoration-line-through mb-0">$12.00</p>
                            <h3 class="text-body-emphasis mb-0">$11.00</h3>
                          </div>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/4.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple iMac 24&quot; 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(134 people rated)</span></p>
                        </div>
                        <div>
                          <p class="fs-9 text-body-highlight fw-bold mb-2">Exchange with kidney</p>
                          <div class="d-flex align-items-center mb-1">
                            <p class="me-2 text-body text-decoration-line-through mb-0">$1499.00</p>
                            <h3 class="text-body-emphasis mb-0">$1399.00</h3>
                          </div>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">7 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/5.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(59 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$59.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/7.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(13 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$799.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/12.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">HORI Racing Wheel Apex for PlayStation 4/3, and PC</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(64 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$299.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">1 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container active" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove from wishlist"><span class="fas fa-heart" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/1.png" alt="" /><span class="badge text-bg-success fs-10 product-verified-badge">Verified<span class="fas fa-check ms-1"></span></span></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Amazfit T-Rex Pro Smart Watch with GPS, Outdoor Fitness Watch for Men, Military Standard Certified</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(32 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$20.00</h3>
                          <p class="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/16.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple AirPods Pro</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(39 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$59.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/10.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Apple Magic Mouse (Wireless, Rechargable) - Silver</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(6 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$89.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/25.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">RESPAWN 200 Racing Style Gaming Chair, in Gray RSP 200 GRY</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$499.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/27.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">LEVOIT Humidifiers for Bedroom Large Room 6L Warm and Cool Mist for...</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(3 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$299.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/26.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">NETGEAR Nighthawk Pro Gaming XR500 Wi-Fi Router with 4 Ethernet Ports...</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$49.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">4 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/18.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Rachael Ray Cucina Bakeware Set Includes Nonstick Bread Baking Cookie Sheet...</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(1 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$29.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/17.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">Xbox Series S</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(6 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$19.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/24.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">FURINNO Computer Writing Desk, Walnut</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$199.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-xxl-2">
                  <div class="product-card-container h-100">
                    <div class="position-relative text-decoration-none product-card h-100">
                      <div class="d-flex flex-column justify-content-between h-100">
                        <div>
                          <div class="border border-1 border-translucent rounded-3 position-relative mb-3"><button class="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span class="fas fa-heart d-block-hover" data-fa-transform="down-1"></span><span class="far fa-heart d-none-hover" data-fa-transform="down-1"></span></button><img class="img-fluid" src="/assets/img/products/20.png" alt="" /></div><a class="stretched-link" href="product-details">
                            <h6 class="mb-2 lh-sm line-clamp-3 product-name">ASUS TUF Gaming F15 Gaming Laptop</h6>
                          </a>
                          <p class="fs-9"><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa fa-star text-warning"></span><span class="fa-regular fa-star text-warning-light" data-bs-theme="light"></span><span class="text-body-quaternary fw-semibold ms-1">(3 people rated)</span></p>
                        </div>
                        <div>
                          <h3 class="text-body-emphasis">$150.00</h3>
                          <p class="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <nav aria-label="Page navigation example">
                  <ul class="pagination mb-0">
                    <li class="page-item">
                      <a class="page-link" href="#">
                        <span class="fas fa-chevron-left"> </span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">1</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">3</a>
                    </li>
                    <li class="page-item active" aria-current="page">
                      <a class="page-link" href="#">4</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">5</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#"> <span class="fas fa-chevron-right"></span></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div><!-- end of .container-->
      </section><!-- <section> close ============================-->
      <!-- ============================================-->`;

export default function ProductsFilter() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
