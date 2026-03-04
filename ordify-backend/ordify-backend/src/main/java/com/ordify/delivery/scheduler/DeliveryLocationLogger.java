package com.ordify.delivery.scheduler;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.ordify.delivery.entity.DeliveryLocationLog;
import com.ordify.delivery.entity.DeliveryPartner;
import com.ordify.delivery.repository.DeliveryLocationLogRepository;
import com.ordify.delivery.repository.DeliveryPartnerRepository;

import jakarta.transaction.Transactional;

@Component
public class DeliveryLocationLogger {

    private final DeliveryPartnerRepository partnerRepository;
    private final DeliveryLocationLogRepository locationLogRepository;

    public DeliveryLocationLogger(DeliveryPartnerRepository partnerRepository,
                                  DeliveryLocationLogRepository locationLogRepository) {
        this.partnerRepository = partnerRepository;
        this.locationLogRepository = locationLogRepository;
    }

    // Run every 3 seconds (3000 ms)
    @Scheduled(fixedRate = 3000)
    @Transactional
    public void logOnlinePartnersLocations() {
        List<DeliveryPartner> partners = partnerRepository.findByIsOnlineTrue();
        if (partners == null || partners.isEmpty()) {
            return;
        }

        List<DeliveryLocationLog> logs = new ArrayList<>();
        LocalDateTime now = LocalDateTime.now();

        for (DeliveryPartner p : partners) {
            Double lat = p.getCurrentLatitude();
            Double lon = p.getCurrentLongitude();
            if (lat == null || lon == null) {
                continue; // skip partners without a known location
            }

            DeliveryLocationLog log = new DeliveryLocationLog();
            log.setDeliveryPartnerId(p.getDeliveryPartnerId());
            log.setLatitude(lat);
            log.setLongitude(lon);
            log.setLoggedAt(now);
            logs.add(log);
        }

        if (!logs.isEmpty()) {
            locationLogRepository.saveAll(logs);
        }
    }
}
