import { useEffect } from 'react';
import usePhoenixInit from '../../hooks/usePhoenixInit';

const pageHtml = `<div class="row g-0 mb-4 align-items-center">
          <div class="col-5 col-md-6">
            <h4 class="mb-0 text-body-emphasis fw-bold fs-md-6"><span class="calendar-day d-block d-md-inline mb-1"></span><span class="px-3 fw-thin text-body-quaternary d-none d-md-inline">|</span><span class="calendar-date"></span></h4>
          </div>
          <div class="col-7 col-md-6 d-flex justify-content-end"><button class="btn btn-link text-body px-0 me-2 me-md-4"><span class="fa-solid fa-sync fs-10 me-2"></span><span class="d-none d-md-inline">Sync Now</span></button>
            <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#addEventModal"> <span class="fas fa-plus pe-2 fs-10"></span>Add new task </button>
          </div>
        </div>
        <div class="mx-n4 px-4 mx-lg-n6 px-lg-6 border-y border-translucent">
          <div class="row py-3 gy-3 gx-0">
            <div class="col-6 col-md-4 order-1 d-flex align-items-center"><button class="btn btn-sm btn-phoenix-primary px-4" data-event="today">Today</button></div>
            <div class="col-12 col-md-4 order-md-1 d-flex align-items-center justify-content-center"><button class="btn icon-item icon-item-sm shadow-none text-body-emphasis p-0" type="button" data-event="prev" title="Previous"><span class="fas fa-chevron-left"></span></button>
              <h3 class="px-3 text-body-emphasis fw-semibold calendar-title mb-0"> </h3><button class="btn icon-item icon-item-sm shadow-none text-body-emphasis p-0" type="button" data-event="next" title="Next"><span class="fas fa-chevron-right"></span></button>
            </div>
            <div class="col-6 col-md-4 ms-auto order-1 d-flex justify-content-end">
              <div>
                <div class="btn-group btn-group-sm" role="group"><button class="btn btn-phoenix-secondary active-view" data-fc-view="dayGridMonth">Month</button>
                  <button class="btn btn-phoenix-secondary" data-fc-view="timeGridWeek">Week</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="calendar-outline mt-6 mb-9" id="appCalendar"></div>
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
                      <div class="py-2"><a class="dropdown-item" href="e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
                      <div class="py-2"><a class="dropdown-item py-2 d-flex align-items-center" href="e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="h-100 w-100 object-fit-cover rounded-3" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                          </div>
                        </a>
                        <a class="dropdown-item py-2 d-flex align-items-center" href="e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="img-fluid" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">30 Sep at 12:30 PM</span></p>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
                      <div class="py-2"><a class="dropdown-item" href="e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
                      <div class="py-2"><a class="dropdown-item" href="e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="e-commerce/landing/product-details">
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
                      <div class="py-2"><a class="dropdown-item" href="e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="e-commerce/landing/product-details">
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
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="eventDetailsModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border border-translucent"></div>
        </div>
      </div>
      <div class="modal fade" id="addEventModal" tabindex="-1" data-bs-focus="false">
        <div class="modal-dialog">
          <div class="modal-content border border-translucent">
            <form id="addEventForm" autocomplete="off">
              <div class="modal-header px-card border-0">
                <div class="w-100 d-flex justify-content-between align-items-start">
                  <div>
                    <h5 class="mb-0 lh-sm text-body-highlight">Add new</h5>
                    <div class="mt-2">
                      <div class="form-check form-check-inline"><input class="form-check-input" id="inlineRadio1" type="radio" name="calendarTask" checked="checked" /><label class="form-check-label" for="inlineRadio1">Event</label></div>
                      <div class="form-check form-check-inline"> <input class="form-check-input" id="inlineRadio2" type="radio" name="calendarTask" /><label class="form-check-label" for="inlineRadio2">Task</label></div>
                    </div>
                  </div><button class="btn p-1 fs-10 text-body" type="button" data-bs-dismiss="modal" aria-label="Close">DISCARD </button>
                </div>
              </div>
              <div class="modal-body p-card py-0">
                <div class="form-floating mb-3"><input class="form-control" id="eventTitle" type="text" name="title" required="required" placeholder="Event title" /><label for="eventTitle">Title</label></div>
                <div class="form-floating mb-5"><select class="form-select" id="eventLabel" name="label">
                    <option value="primary" selected="selected">Business</option>
                    <option value="secondary">Personal</option>
                    <option value="success">Meeting</option>
                    <option value="danger">Birthday</option>
                    <option value="info">Report</option>
                    <option value="warinng">Must attend</option>
                  </select><label for="eventLabel">Label</label></div>
                <div class="flatpickr-input-container mb-3">
                  <div class="form-floating"><input class="form-control datetimepicker" id="eventStartDate" type="text" name="startDate" value="" placeholder="yyyy/mm/dd hh:mm" data-options='{"enableTime":true,"dateFormat":"Y-m-d H:i","disableMobile":true}' /><span class="uil uil-calendar-alt flatpickr-icon text-body-tertiary"></span><label class="ps-6" for="eventStartDate">Starts at</label></div>
                </div>
                <div class="flatpickr-input-container mb-3">
                  <div class="form-floating"><input class="form-control datetimepicker" id="eventEndDate" type="text" name="endDate" placeholder="yyyy/mm/dd hh:mm" data-options='{"disableMobile":true,"enableTime":true,"dateFormat":"Y-m-d H:i"}' /><span class="uil uil-calendar-alt flatpickr-icon text-body-tertiary"></span><label class="ps-6" for="eventEndDate">Ends at</label></div>
                </div>
                <div class="form-check"><input class="form-check-input" type="checkbox" id="eventAllDay" name="allDay" /><label class="form-check-label" for="eventAllDay">All day event </label></div>
                <div class="form-floating my-5"><textarea class="form-control" id="eventDescription" placeholder="Leave a comment here" name="description" style="height: 128px"></textarea><label for="eventDescription">Description</label></div>
                <div class="form-floating mb-3"><select class="form-select" id="eventRepetition" name="repetition">
                    <option value="" selected="selected">No Repeat</option>
                    <option value="daily">Daily </option>
                    <option value="deekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="dailyExceptHolidays">Daily (except holidays)</option>
                    <option value="custom">Custom</option>
                  </select><label for="eventRepetition">Repetition</label></div>
                <div class="form-floating mb-3"><select class="form-select" id="eventReminder" name="reminder">
                    <option value="" selected="selected">30 minutes earlier</option>
                    <option value="">8 am on the day</option>
                    <option value="">8 am on the day before</option>
                    <option value="">2 days earlier</option>
                    <option value="">a week earlier</option>
                  </select><label for="eventReminder">Reminder</label></div><button class="btn btn-link p-0 mb-3" type="button"> <span class="fa-solid fa-plus me-2"></span>Add Reminder</button>
              </div>
              <div class="modal-footer d-flex justify-content-between align-items-center border-0"><a class="me-3 fs-9 text-body" href="events/create-an-event">More options<span class="fas fa-angle-right ms-1 fs-10"></span></a><button class="btn btn-primary px-4" type="submit">Save</button></div>
            </form>`;

export default function Calendar() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
