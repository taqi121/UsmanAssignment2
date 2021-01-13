using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using UsmanAssignment2.Models;

namespace UsmanAssignment2.Controllers
{
    public class HomeController : Controller
    {
        DBModelCrudEntities Db = new DBModelCrudEntities();
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult HomePage()
        {
            return View();
        }

        public ActionResult AddNew()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddNew(CrudOperation crud,string gender_id,string domicile_id,string country_id,string nationality, string ex_ser_man)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                try
                {
                    crud.Gender = gender_id;
                    crud.Domicile = domicile_id;
                    crud.country = country_id;
                    crud.Nationality = nationality;
                    crud.ExService = ex_ser_man;

                    Db.CrudOperations.Add(crud);
                    Db.SaveChanges();
                    message = "Data Saved Successfully";
                    ViewBag.Message = message;
                    return RedirectToAction("AddNew");
                }
                catch(Exception)
                {
                    message = "Some Error Here";
                    ViewBag.Message = message;
                    return RedirectToAction("HomePage");
                }

            }
            else
            {
                message = "Some Error Here";
                ViewBag.Message = message;
                return RedirectToAction("HomePage");
            }
        }
        public ActionResult EmployeeView()
        {
            var message = "";
            try
            {
                message = "Done";
                ViewBag.Message = message;
                return View(Db.CrudOperations.ToList());
            }catch
            {
                message = "Some Error Here";
                ViewBag.Message = message;
                return RedirectToAction("HomePage");
            }
        }
        public ActionResult DetailsOfEmploye(int id)
        {
            return View(Db.CrudOperations.Where(x => x.ID == id).FirstOrDefault());
        }
        public ActionResult Edit(int id)
        {
            try
            {
                return View(Db.CrudOperations.Where(x => x.ID == id).FirstOrDefault());
            }catch
            {
                return RedirectToAction("HomePage");
            }
        }
        [HttpPost]
        public ActionResult Edit(CrudOperation crud, string gender_id, string domicile_id, string country_id, string nationality, string ex_ser_man)
        {
            var message = "";
            if (ModelState.IsValid)
            {
                try
                {
                    crud.Gender = gender_id;
                    crud.Domicile = domicile_id;
                    crud.country = country_id;
                    crud.Nationality = nationality;
                    crud.ExService = ex_ser_man;

                    Db.Entry(crud).State = EntityState.Modified;
                    Db.SaveChanges();
                    message = "Data Saved Successfully";
                    ViewBag.Message = message;
                    return RedirectToAction("EmployeeView");
                }
                catch (Exception)
                {
                    message = "Some Error Here";
                    ViewBag.Message = message;
                    return RedirectToAction("HomePage");
                }

            }
            else
            {
                message = "Some Error Here";
                ViewBag.Message = message;
                return RedirectToAction("HomePage");
            }
        }

        public ActionResult Delete(int id)
        {
            return View(Db.CrudOperations.Where(x => x.ID == id).FirstOrDefault());
        }
        [HttpPost]
        [ActionName("Delete")]
        public ActionResult Delete1(int id)
        {
            try
            {
                CrudOperation employee = Db.CrudOperations.Where(x => x.ID == id).FirstOrDefault();
                Db.CrudOperations.Remove(employee);
                Db.SaveChanges();
                return View("EmployeeView");
            }catch
            {
                return View("HomePage");
            }
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}