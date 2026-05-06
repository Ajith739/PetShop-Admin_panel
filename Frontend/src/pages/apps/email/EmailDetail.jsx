import { useEffect } from 'react';
import usePhoenixInit from '../../../hooks/usePhoenixInit';

const pageHtml = `<div class="email-container">
          <div class="row gx-lg-6 gx-3 py-4 z-2 position-sticky bg-body email-header">
            <div class="col-auto"><a class="btn btn-primary email-sidebar-width d-none d-lg-block" href="compose">Compose</a><button class="btn px-3 btn-phoenix-secondary text-body-tertiary d-lg-none" data-phoenix-toggle="offcanvas" data-phoenix-target="#emailSidebarColumn"><span class="fa-solid fa-bars"></span></button></div>
            <div class="col-auto d-lg-none"><a class="btn btn-primary px-3 px-sm-4" href="compose"> <span class="d-none d-sm-inline-block">Compose</span><span class="d-sm-none fas fa-plus"></span></a></div>
            <div class="col-auto flex-1">
              <div class="search-box w-100">
                <form class="position-relative"><input class="form-control search-input search" type="search" placeholder="Search ..." aria-label="Search" />
                  <span class="fas fa-search search-box-icon"></span>
                </form>
              </div>
            </div>
          </div>
          <div class="row g-lg-6 mb-8">
            <div class="col-lg-auto">
              <div class="email-sidebar email-sidebar-width bg-body phoenix-offcanvas phoenix-offcanvas-fixed" id="emailSidebarColumn" data-breakpoint="lg">
                <div class="email-content scrollbar-overlay">
                  <div class="d-flex justify-content-between align-items-center">
                    <p class="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">mailbox</p><button class="btn d-lg-none p-0 mb-2" data-phoenix-dismiss="offcanvas"><span class="uil uil-times fs-8"></span></button>
                  </div>
                  <ul class="nav flex-column border-top border-translucent fs-9 vertical-nav mb-4">
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="inbox">
                        <div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-inbox"></span><span class="flex-1">Inbox</span><span class="nav-item-count">5</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none active" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-location-arrow"></span><span class="flex-1">Sent</span><span class="nav-item-count">23</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-pen"></span><span class="flex-1">Draft</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-exclamation-circle"></span><span class="flex-1">Spam</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-trash"></span><span class="flex-1">Trash</span></div>
                      </a></li>
                  </ul>
                  <div class="d-flex justify-content-between">
                    <p class="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">Filtered</p><a class="fs-10 fw-bold" href="#!"><span class="fa-solid fa-plus me-2"></span>Add Folder</a>
                  </div>
                  <ul class="nav flex-column border-top border-translucent fs-9 vertical-nav mb-4">
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucenttext-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-star"></span><span class="flex-1">Starred</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucenttext-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="me-2 nav-icons uil uil-archive"></span><span class="flex-1">Archive</span></div>
                      </a></li>
                  </ul>
                  <div class="d-flex justify-content-between">
                    <p class="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-2 fw-bold">Labels</p><a class="fs-10 fw-bold" href="#!"><span class="fa-solid fa-plus me-2"></span>Add Label</a>
                  </div>
                  <ul class="nav flex-column border-top border-translucent fs-9 vertical-nav">
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="ms-n1 me-1 fa-solid fa-circle text-primary" data-fa-transform="shrink-10"></span><span class="flex-1">Personal</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="ms-n1 me-1 fa-solid fa-circle text-primary-dark" data-fa-transform="shrink-10"></span><span class="flex-1">Work</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="ms-n1 me-1 fa-solid fa-circle text-success" data-fa-transform="shrink-10"></span><span class="flex-1">Payments</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="ms-n1 me-1 fa-solid fa-circle text-warning" data-fa-transform="shrink-10"></span><span class="flex-1">Invoices</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="ms-n1 me-1 fa-solid fa-circle text-danger" data-fa-transform="shrink-10"></span><span class="flex-1">Accounts</span></div>
                      </a></li>
                    <li class="nav-item"><a class="nav-link py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none" aria-current="page" href="#!">
                        <div class="d-flex align-items-center"><span class="ms-n1 me-1 fa-solid fa-circle text-info" data-fa-transform="shrink-10"></span><span class="flex-1">Forums</span></div>
                      </a></li>
                  </ul>
                </div>
              </div>
              <div class="phoenix-offcanvas-backdrop d-lg-none top-0" data-phoenix-backdrop="data-phoenix-backdrop"></div>
            </div>
            <div class="col-3 d-none d-xxl-block">
              <div class="email-content scrollbar">
                <div class="px-lg-1">
                  <div class="d-flex align-items-center flex-wrap position-sticky pb-2 bg-body z-2 email-toolbar">
                    <div class="d-flex align-items-center flex-1 me-2"><button class="btn btn-sm p-0 me-2" type="button" onclick="location.reload()"><span class="text-primary fas fa-redo fs-10"></span></button>
                      <p class="fw-semibold fs-10 text-body-tertiary text-opacity-85 mb-0 lh-sm text-nowrap">Last refreshed 1m ago</p>
                    </div>
                    <div class="d-flex">
                      <p class="text-body-tertiary text-opacity-85 fs-9 fw-semibold mb-0 me-3"> <span class="text-body">1-7 </span>of <span class="text-body">205</span></p><button class="btn p-0 me-3" type="button"><span class="text-body-quaternary fa-solid fa-angle-left fs-10"></span></button>
                      <button class="btn p-0" type="button"><span class="text-primary fa-solid fa-angle-right fs-10"></span></button>
                    </div>
                  </div>
                  <div class="border-top border-translucent py-2 d-flex justify-content-between">
                    <div class="form-check mb-0 fs-8"><input class="form-check-input" type="checkbox" data-bulk-select-row="data-bulk-select-row" /></div>
                    <div><button class="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive"><span class="fas fa-archive fs-10"></span></button>
                      <button class="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Delete"><span class="fas fa-trash fs-10"></span></button>
                      <button class="btn p-0 me-2 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Star"><span class="fas fa-star fs-10"></span></button>
                      <button class="btn p-0 text-body-quaternary hover text-body-tertiary text-opacity-85" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tags"><span class="fas fa-tag fs-10"></span></button>
                    </div>
                  </div>
                  <div class="border-top border-translucent hover-actions-trigger py-3">
                    <div class="row align-items-sm-center gx-2">
                      <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row"><input class="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-1" data-bulk-select-row="data-bulk-select-row" /><button class="btn p-0"><span class="fas text-warning fa-star"></span></button></div>
                      </div>
                      <div class="col-auto">
                        <div class="avatar avatar-s  rounded-circle">
                          <img class="rounded-circle " src="/assets/img/team/60.webp" alt="" />
                        </div>
                      </div>
                      <div class="col-auto"><a class="text-body-emphasis fw-bold inbox-link fs-9" href="email-detail">Jessica Ball</a></div>
                      <div class="col-auto ms-auto">
                        <div class="hover-actions end-0"><button class="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button>
                          <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark Unread</a><a class="dropdown-item" href="#!">Mark Important</a><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Print</a><a class="dropdown-item" href="#!">Report Spam</a><a class="dropdown-item" href="#!">Report Phishing</a><a class="dropdown-item" href="#!">Mute Jessica Ball</a><a class="dropdown-item" href="#!">Block Jessica Ball</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                        </div><span class="fs-10 fw-bold">1 M</span>
                      </div>
                    </div>
                    <div class="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a class="d-block inbox-link" href="email-detail"><span class="fs-9 line-clamp-1 text-body-emphasis">Query about purchased soccer socks</span>
                        <p class="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Greetings. I have purchased some socks under the bundle offer you availed this week. According to the offer I was thrilled to get a 25% off of any product I bought. Regardless, I had to pay the exact full price for them...</p>
                      </a></div>
                  </div>
                  <div class="border-top border-translucent hover-actions-trigger py-3">
                    <div class="row align-items-sm-center gx-2">
                      <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row"><input class="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-2" data-bulk-select-row="data-bulk-select-row" /><button class="btn p-0"><span class="far text-body-quaternary fa-star"></span></button></div>
                      </div>
                      <div class="col-auto">
                        <div class="avatar avatar-s  rounded-circle">
                          <img class="rounded-circle " src="/assets/img/team/58.webp" alt="" />
                        </div>
                      </div>
                      <div class="col-auto"><a class="text-body-emphasis fw-bold inbox-link fs-9" href="email-detail">Danny Reid</a></div>
                      <div class="col-auto ms-auto">
                        <div class="hover-actions end-0"><button class="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button>
                          <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark Unread</a><a class="dropdown-item" href="#!">Mark Important</a><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Print</a><a class="dropdown-item" href="#!">Report Spam</a><a class="dropdown-item" href="#!">Report Phishing</a><a class="dropdown-item" href="#!">Mute Jessica Ball</a><a class="dropdown-item" href="#!">Block Jessica Ball</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                        </div><span class="fs-10 fw-bold">3 M</span>
                      </div>
                    </div>
                    <div class="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a class="d-block inbox-link" href="email-detail"><span class="fs-9 line-clamp-1 text-body-emphasis">How to take the headache out of Order</span>
                        <p class="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Hello! As I've mentioned before, we have this huge order deals to ship within this month. Also, the financial report is attached to this email. Hopefully, you'll find it useful for the company.</p>
                      </a><a class="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link" href="#!"><span class="fas fa-file-pdf text-warning fs-9"></span><span class="ms-2 fw-bold fs-10 text-body">Financial_Reports.pdf</span></a><a class="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link" href="#!"><span class="fas fa-file-zipper text-warning fs-9"></span><span class="ms-2 fw-bold fs-10 text-body">Frame20.zip</span></a></div>
                  </div>
                  <div class="border-top border-translucent hover-actions-trigger py-3">
                    <div class="row align-items-sm-center gx-2">
                      <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row"><input class="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-3" data-bulk-select-row="data-bulk-select-row" /><button class="btn p-0"><span class="fas text-warning fa-star"></span></button></div>
                      </div>
                      <div class="col-auto">
                        <div class="avatar avatar-s  rounded-circle">
                          <img class="rounded-circle " src="/assets/img/team/57.webp" alt="" />
                        </div>
                      </div>
                      <div class="col-auto"><a class="text-body fw-semibold inbox-link fs-9" href="email-detail">Harley Brown</a></div>
                      <div class="col-auto ms-auto">
                        <div class="hover-actions end-0"><button class="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button>
                          <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark Unread</a><a class="dropdown-item" href="#!">Mark Important</a><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Print</a><a class="dropdown-item" href="#!">Report Spam</a><a class="dropdown-item" href="#!">Report Phishing</a><a class="dropdown-item" href="#!">Mute Jessica Ball</a><a class="dropdown-item" href="#!">Block Jessica Ball</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                        </div><span class="fs-10">5 M</span>
                      </div>
                    </div>
                    <div class="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a class="d-block inbox-link" href="email-detail"><span class="fs-9 line-clamp-1 text-body-highlight">The Arnold Schwarzenegger of Order</span>
                        <p class="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount or...</p>
                      </a></div>
                  </div>
                  <div class="border-top border-translucent hover-actions-trigger py-3">
                    <div class="row align-items-sm-center gx-2">
                      <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row"><input class="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-4" data-bulk-select-row="data-bulk-select-row" /><button class="btn p-0"><span class="far text-body-quaternary fa-star"></span></button></div>
                      </div>
                      <div class="col-auto">
                        <div class="avatar avatar-s  rounded-circle">
                          <img class="rounded-circle " src="/assets/img/team/59.webp" alt="" />
                        </div>
                      </div>
                      <div class="col-auto"><a class="text-body-emphasis fw-bold inbox-link fs-9" href="email-detail">Hollie Stephens</a></div>
                      <div class="col-auto ms-auto">
                        <div class="hover-actions end-0"><button class="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button>
                          <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark Unread</a><a class="dropdown-item" href="#!">Mark Important</a><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Print</a><a class="dropdown-item" href="#!">Report Spam</a><a class="dropdown-item" href="#!">Report Phishing</a><a class="dropdown-item" href="#!">Mute Jessica Ball</a><a class="dropdown-item" href="#!">Block Jessica Ball</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                        </div><span class="fs-10 fw-bold">8 M</span>
                      </div>
                    </div>
                    <div class="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a class="d-block inbox-link" href="email-detail"><span class="fs-9 line-clamp-1 text-body-emphasis">My order is not being taken</span>
                        <p class="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Hello. I’m knocking to let you know that I am trying to place some orders on your site. But my orders are not being taken, maybe it’s technical issues. Can you help me with it as I really need the products I am trying to...</p>
                      </a></div>
                  </div>
                  <div class="border-top border-translucent hover-actions-trigger py-3">
                    <div class="row align-items-sm-center gx-2">
                      <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row"><input class="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-5" data-bulk-select-row="data-bulk-select-row" /><button class="btn p-0"><span class="fas text-warning fa-star"></span></button></div>
                      </div>
                      <div class="col-auto">
                        <div class="avatar avatar-s  rounded-circle">
                          <img class="rounded-circle avatar-placeholder" src="/assets/img/team/avatar.webp" alt="" />
                        </div>
                      </div>
                      <div class="col-auto"><a class="text-body fw-semibold inbox-link fs-9" href="email-detail">Natasha West</a></div>
                      <div class="col-auto ms-auto">
                        <div class="hover-actions end-0"><button class="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button>
                          <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark Unread</a><a class="dropdown-item" href="#!">Mark Important</a><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Print</a><a class="dropdown-item" href="#!">Report Spam</a><a class="dropdown-item" href="#!">Report Phishing</a><a class="dropdown-item" href="#!">Mute Jessica Ball</a><a class="dropdown-item" href="#!">Block Jessica Ball</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                        </div><span class="fs-10">20 M</span>
                      </div>
                    </div>
                    <div class="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a class="d-block inbox-link" href="email-detail"><span class="fs-9 line-clamp-1 text-body-highlight">Shipment is missing</span>
                        <p class="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Greetings! I’ve got an email saying I was to get the products yesterday. But got a call instead saying the shipment was misplaced. Can you put some light on it? Really need the products.</p>
                      </a></div>
                  </div>
                  <div class="border-top border-translucent hover-actions-trigger py-3">
                    <div class="row align-items-sm-center gx-2">
                      <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row"><input class="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-6" data-bulk-select-row="data-bulk-select-row" /><button class="btn p-0"><span class="fas text-warning fa-star"></span></button></div>
                      </div>
                      <div class="col-auto">
                        <div class="avatar avatar-s ">
                          <div class="avatar-name rounded-circle"><span>R</span></div>
                        </div>
                      </div>
                      <div class="col-auto"><a class="text-body fw-semibold inbox-link fs-9" href="email-detail">Max Williamson</a></div>
                      <div class="col-auto ms-auto">
                        <div class="hover-actions end-0"><button class="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button>
                          <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark Unread</a><a class="dropdown-item" href="#!">Mark Important</a><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Print</a><a class="dropdown-item" href="#!">Report Spam</a><a class="dropdown-item" href="#!">Report Phishing</a><a class="dropdown-item" href="#!">Mute Jessica Ball</a><a class="dropdown-item" href="#!">Block Jessica Ball</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                        </div><span class="fs-10">30 M</span>
                      </div>
                    </div>
                    <div class="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a class="d-block inbox-link" href="email-detail"><span class="fs-9 line-clamp-1 text-body-highlight">How can I order something urgently?</span>
                        <p class="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">I saw your promotion on 25% sales. Do you avail emergency orders and urgent shipments? If you do, I need to place some orders. Please reply, thanks.</p>
                      </a><a class="d-inline-flex align-items-center border border-translucent rounded-pill px-3 py-1 me-2 mt-2 inbox-link" href="#!"><span class="fa-solid fa-music text-primary fs-9"></span><span class="ms-2 fw-bold fs-10 text-body">syllabus</span></a></div>
                  </div>
                  <div class="border-top border-translucent hover-actions-trigger pt-3">
                    <div class="row align-items-sm-center gx-2">
                      <div class="col-auto">
                        <div class="d-flex flex-column flex-sm-row"><input class="form-check-input mb-2 m-sm-0 me-sm-2" type="checkbox" id="checkbox-7" data-bulk-select-row="data-bulk-select-row" /><button class="btn p-0"><span class="far text-body-quaternary fa-star"></span></button></div>
                      </div>
                      <div class="col-auto">
                        <div class="avatar avatar-s  rounded-circle">
                          <img class="rounded-circle " src="/assets/img/team/30.webp" alt="" />
                        </div>
                      </div>
                      <div class="col-auto"><a class="text-body fw-semibold inbox-link fs-9" href="email-detail">Ethan Hawkins</a></div>
                      <div class="col-auto ms-auto">
                        <div class="hover-actions end-0"><button class="btn btn-phoenix-secondary btn-icon dropdown-toggle dropdown-caret-none" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fa-solid fa-ellipsis"></span></button>
                          <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Mark Unread</a><a class="dropdown-item" href="#!">Mark Important</a><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Print</a><a class="dropdown-item" href="#!">Report Spam</a><a class="dropdown-item" href="#!">Report Phishing</a><a class="dropdown-item" href="#!">Mute Jessica Ball</a><a class="dropdown-item" href="#!">Block Jessica Ball</a><a class="dropdown-item text-danger" href="#!">Delete</a></div>
                        </div><span class="fs-10">32 M</span>
                      </div>
                    </div>
                    <div class="ms-4 mt-n3 mt-sm-0 ms-sm-11"><a class="d-block inbox-link" href="email-detail"><span class="fs-9 line-clamp-1 text-body-highlight">How the delicacy of the products will be handled??</span>
                        <p class="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">Hello! I need to purchase some delicate products. Can you tell me how you handle the delicacy of the products to be shipped? I don’t want to get my hands on broken things, so. Thank you! </p>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card email-content">
                <div class="card-body overflow-hidden">
                  <div class="d-flex flex-between-center pb-3 border-bottom border-translucent mb-4"><a class="btn btn-link p-0 text-body-secondary me-3" href="inbox"><span class="fa-solid fa-angle-left fw-bolder fs-8"></span></a>
                    <h3 class="flex-1 mb-0 lh-sm line-clamp-1">Query about recently purchased soccer socks</h3>
                    <div class="btn-reveal-trigger"><button class="btn btn-sm dropdown-toggle dropdown-caret-none transition-none d-flex btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span class="fas fa-ellipsis-h"></span></button>
                      <div class="dropdown-menu dropdown-menu-end py-2"><a class="dropdown-item" href="#!">Edit</a><a class="dropdown-item text-danger" href="#!">Delete</a><a class="dropdown-item" href="#!">Download</a><a class="dropdown-item" href="#!">Report abuse</a></div>
                    </div>
                  </div>
                  <div class="overflow-x-hidden scrollbar email-detail-content">
                    <div class="row align-items-center gy-3 gx-0 mb-10">
                      <div class="col-12 col-sm-auto d-flex order-sm-1"><button class="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reply"><span class="fa-solid fa-reply text-body-quaternary"></span></button>
                        <button class="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove"><span class="fa-solid fa-trash-can text-body-quaternary"></span></button>
                        <button class="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Archive"><span class="fa-solid fa-archive text-body-quaternary"></span></button>
                        <button class="btn p-0 me-4 me-lg-3 me-xl-4" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Print"><span class="fa-solid fa-print text-body-quaternary"></span></button>
                        <button class="btn p-0" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Star"><span class="fa-regular fa-star text-body-quaternary"></span></button>
                      </div>
                      <div class="col-auto"><img class="me-2 rounded-circle" src="/assets/img/team/60.webp" alt="..." width="48" height="48" /></div>
                      <div class="col-auto flex-1">
                        <div class="d-flex mb-1">
                          <h5 class="mb-0 text-body-highlight me-2">Jessica Ball</h5>
                          <p class="mb-0 lh-sm text-body-tertiary fs-9 d-none d-md-block text-nowrap">&#60; jessica.ball@email.com &#62;</p>
                        </div>
                        <p class="mb-0 fs-9"><span class="text-body-tertiary">to</span><span class="fw-bold text-body-secondary"> Me </span><span class="text-body-highlight fw-semibold fs-10">28 Aug, 2021 </span><span class="fw-semibold text-body fs-10 me-1"> 6:32 PM</span><span class="fa-regular fa-star text-body-quaternary"></span></p>
                      </div>
                    </div>
                    <div class="text-body-highlight fs-9 w-100 w-md-75 mb-8">
                      <p>Dear Simp sons, </p>
                      <p>Something in a thirty-acre thermal thicket of thorns and thistles thumped and thundered threatening the three-D thoughts of Matthew the thug - although, theatrically, it was only the thirteen-thousand thistles and thorns through the underneath of his thigh that the thirty year old thug thought of that morning.</p>
                      <p>How much caramel can a canny canonball cram in a camel if a canny canonball can cram caramel in a camel? If practice makes perfect and perfect needs practice, I’m perfectly practiced and practically perfect.</p>
                      <p class="mb-0">Best regards,</p>
                      <p>Jess</p>
                    </div>
                    <div class="d-flex align-items-center mb-5"><button class="btn btn-link text-body-highlight fs-8 text-decoration-none p-0" type="button"><span class="fa-solid fa-paperclip me-2"></span>2 Attachments</button></div>
                    <div class="row pb-11 border-bottom mb-4 gx-0 gy-2 border-translucent">
                      <div class="col-auto me-3"><a class="text-decoration-none d-flex align-items-center" href="#!">
                          <div class="btn-icon btn-icon-xl border rounded-3 text-body-quaternary text-opacity-75 flex-column me-2"><span class="fa-solid fa-file fs-8 mb-1"></span>
                            <p class="mb-0 fs-10 fw-bold">PDF</p>
                          </div>
                          <div>
                            <h6 class="text-body-highlight">workflow-data.pdf</h6>
                            <p class="fs-9 mb-0 text-body-tertiary lh-1">53.34 KB</p>
                          </div>
                        </a></div>
                      <div class="col-auto"><a class="text-decoration-none d-flex align-items-center" href="#!"><img class="rounded" src="/assets/img/generic/41.png" alt="..." />
                          <div class="ms-2">
                            <h6 class="text-body-highlight">forest.jpg</h6>
                            <p class="fs-9 mb-0 text-body-tertiary">53.34 KB</p>
                          </div>
                        </a></div>
                    </div>
                    <div class="d-flex justify-content-between"><button class="btn btn-phoenix-secondary me-1 text-nowrap px-2 px-sm-4">Reply<span class="fa-solid fa-reply ms-2 fs-10"></span></button>
                      <button class="btn btn-phoenix-secondary me-1 text-nowrap px-2 px-sm-4">Reply All<span class="fa-solid fa-reply-all ms-2 fs-10"></span></button>
                      <button class="btn btn-phoenix-secondary ms-auto text-nowrap px-2 px-sm-4">Forward<span class="fa-solid fa-share ms-2 fs-10"></span></button>
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
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> Store Macbook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-clock-rotate-left" data-fa-transform="shrink-2"></span> MacBook Air - 13″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Products</h6>
                      <div class="py-2"><a class="dropdown-item py-2 d-flex align-items-center" href="../e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="h-100 w-100 object-fit-cover rounded-3" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Air - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">8GB Memory - 1.6GHz - 128GB Storage</span></p>
                          </div>
                        </a>
                        <a class="dropdown-item py-2 d-flex align-items-center" href="../e-commerce/landing/product-details">
                          <div class="file-thumbnail me-2"><img class="img-fluid" src="/assets/img/products/60x60/3.png" alt="" /></div>
                          <div class="flex-1">
                            <h6 class="mb-0 text-body-highlight title">MacBook Pro - 13″</h6>
                            <p class="fs-10 mb-0 d-flex text-body-tertiary"><span class="fw-medium text-body-tertiary text-opactity-85">30 Sep at 12:30 PM</span></p>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Quick Links</h6>
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Support MacBook House</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-link text-body" data-fa-transform="shrink-2"></span> Store MacBook″</div>
                          </div>
                        </a>
                      </div>
                      <hr class="my-0" />
                      <h6 class="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">Files</h6>
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-solid fa-file-zipper text-body" data-fa-transform="shrink-2"></span> Library MacBook folder.rar</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"> <span class="fa-solid fa-file-lines text-body" data-fa-transform="shrink-2"></span> Feature MacBook extensions.txt</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
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
                      <div class="py-2"><a class="dropdown-item" href="../e-commerce/landing/product-details">
                          <div class="d-flex align-items-center">
                            <div class="fw-normal text-body-highlight title"><span class="fa-brands fa-firefox-browser text-body" data-fa-transform="shrink-2"></span> Search in the Web MacBook</div>
                          </div>
                        </a>
                        <a class="dropdown-item" href="../e-commerce/landing/product-details">
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

export default function EmailDetail() {
  usePhoenixInit();

  useEffect(() => {
    if (window.feather) window.feather.replace();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} style={{ display: "contents" }} />;
}
