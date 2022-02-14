import Swal from 'sweetalert2'

export default ({ app }, inject) => {
  inject('swal', Swal.mixin({
    buttonsStyling: true,
    confirmButtonClass: 'mx-2',
    cancelButtonClass: 'mx-2',
    showLoaderOnConfirm: true,
    showCancelButton: false
  }))
}