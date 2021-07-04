package lk.ijse.car_rent.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Driver{

    @Id
    private String driveremail;
    private String password;
    private String nic;
    private String license;
    private String address;
    private int contact;

    @OneToOne(mappedBy = "driver")
    private Schedule schedule;
}
