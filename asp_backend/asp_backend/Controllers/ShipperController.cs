using asp_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Data;

namespace asp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShipperController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ShipperController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public ActionResult getShippers()
        {
            try
            {
                string query = @"SELECT S.shipper_id, U.email, U.full_name, U.phone, U.gender, U.identity_number, U.address, S.driver_license, S.bank_account_number, S.bank_name FROM Users U JOIN Shippers S ON U.id = S.shipper_id";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        mycon.Close();
                    }
                }

                return Ok(table);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet ("{id}")]
        public ActionResult getShipperById(int id)
        {
            try
            {
                string query = @"SELECT S.shipper_id, U.email, U.full_name, U.area, U.apartment_number, U.road_name,
                                U.behind_identity, U.date_of_birth, U.front_identity, U.phone, U.gender, U.identity_number, U.address,
                                S.driver_license, S.bank_account_number, S.bank_name, S.front_license, S.behind_license, S.vaccine_cer 
                                FROM Users U JOIN Shippers S ON U.id = S.shipper_id WHERE S.shipper_id=@id";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        mycon.Close();
                    }
                }

                return Ok(table);
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpPut("{id}")]
        public ActionResult UpdateShipperInfomation(Shippers sp, int id)
        {
            try
            {
                string query = @"
                        UPDATE Shippers SET
                        full_name =@full_name,
                        phone_number=@phone_number,gender=@gender,
                        ethnic=@ethnic, identity_number=@identity_number,
                        address=@address, driver_license=@driver_license,
                        bank_account_number=@bank_account_number, bank_name=@bank_name,
                        social_insurance_number=@social_insurance_number, accident_insurance_number=@accident_insurance_number,
                        vehicle_register_number=@vehicle_register_number
                        where shipper_id=@id;       
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);
                        myCommand.Parameters.AddWithValue("@full_name", sp.full_name);
                        myCommand.Parameters.AddWithValue("@phone_number", sp.phone_number);
                        myCommand.Parameters.AddWithValue("@gender", sp.gender);
                        myCommand.Parameters.AddWithValue("@ethnic", sp.ethnic);
                        myCommand.Parameters.AddWithValue("@identity_number", sp.identity_number);
                        myCommand.Parameters.AddWithValue("@address", sp.address);
                        myCommand.Parameters.AddWithValue("@driver_license", sp.driver_license);
                        myCommand.Parameters.AddWithValue("@bank_account_number", sp.bank_account_number);
                        myCommand.Parameters.AddWithValue("@bankName", sp.bank_name);
                        myCommand.Parameters.AddWithValue("@social_insurance_number", sp.social_insurance_number);
                        myCommand.Parameters.AddWithValue("@accident_insurance_number", sp.accident_insurance_number);
                        myCommand.Parameters.AddWithValue("@vehicle_register_number", sp.vehicle_register_number);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }

                return StatusCode(200, "Cập nhật thông tin nguời giao hộ thành công!");
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteShipperById(int id)
        {
            try
            {
                string query = @"
                        DELETE FROM Shippers
                        WHERE shipper_id=@id;          
            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);

                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        mycon.Close();
                    }
                }

                return StatusCode(200, "Xóa thông tin người giao hộ thành công!");
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpPut("accepted/{id}")]
        public ActionResult UpdateIsAccepted(int id)
        {
            try
            {
                string query = @"
                        UPDATE Shippers SET
                        is_accepted = true
                        where shipper_id=@id;       
                ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("App_DB");
                MySqlDataReader myReader;
                using (MySqlConnection mycon = new MySqlConnection(sqlDataSource))
                {
                    mycon.Open();
                    using (MySqlCommand myCommand = new MySqlCommand(query, mycon))
                    {
                        myCommand.Parameters.AddWithValue("@id", id);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        mycon.Close();
                    }
                }

                return StatusCode(200, "Thông tin giao hộ đã được chấp nhận!");
            }
            catch (Exception)
            {

                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
