package lk.ijse.car_rent.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data

public class Schedule {

    @Id
    private String scheduleId;
    private Date startTime;
    private Date endTime;
    @OneToOne
    private Driver driver;
}
