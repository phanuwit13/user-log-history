import axios from 'axios';
import Swal from "sweetalert2";
import Link from 'next/link'
import Router from 'next/router'

const http = axios.create({
  baseURL: "http://10.0.10.121:3000/user/",
});

class AppService {
  // basename = "/project/rmuticar";
  //   apiPath = "http://127.0.0.1/car/api/";

  localstorage = {
    get: (key) => {
      return localStorage.getItem(key)
    },
    set: (key, data) => {
      localStorage.setItem(key, JSON.stringify(data));
    },
    clear: () => {
      localStorage.clear()
    },
  };

  toPath = (path) => {
    Router.push({
      pathname: path
    })
  }

  showAlert = (title, message, icon = "success") => {
    Swal.fire({
      icon: icon,
      title: title,
      text: message,
      confirmButtonText: "ตกลง",
    });
  };

  showConfirm = (title, message, icon = "warning") => {
    return new Promise((resolve) => {
      Swal.fire({
        title: title,
        text: message,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ตกลง",
        cancelButtonText: "ยกเลิก",
        focusCancel: true,
      }).then((result) => {
        if (result.value) {
          resolve(true);
        }
        resolve(false);
      });
    });
  };

  httpGet = (url) => {
    return new Promise((resolve) => {
      http.get(`${url}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((reason) => {
          console.log(reason);
          resolve({ connect: false, ...reason });
          this.showAlert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้", "", "error");
        });
    });
  };

  httpPost = (url, data) => {
    return new Promise((resolve) => {
      http
        .post(`${url}`, data)
        .then((response) => {
          resolve({ connect: true, ...response.data });
        })
        .catch((reason) => {
          console.log(reason);
          resolve({ connect: false, ...reason });
          this.showAlert("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้", "", "error");
        });
    });
  };
}

const Service = new AppService();
export default Service;