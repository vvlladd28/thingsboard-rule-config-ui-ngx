import { Component } from '@angular/core';
import { AppState } from '@core/public-api';
import { RuleNodeConfiguration, RuleNodeConfigurationComponent } from '@shared/public-api';
import { Store } from '@ngrx/store';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tb-device-profile-config',
  templateUrl: './device-profile-config.component.html',
  styleUrls: []
})
export class DeviceProfileConfigComponent extends RuleNodeConfigurationComponent {

  deviceProfile: UntypedFormGroup;

  constructor(protected store: Store<AppState>,
              private fb: UntypedFormBuilder) {
    super(store);
  }

  protected configForm(): UntypedFormGroup {
    return this.deviceProfile;
  }

  protected onConfigurationSet(configuration: RuleNodeConfiguration) {
    this.deviceProfile = this.fb.group({
      persistAlarmRulesState: [configuration ? configuration.persistAlarmRulesState : false, Validators.required],
      fetchAlarmRulesStateOnStart: [configuration ? configuration.fetchAlarmRulesStateOnStart : false, Validators.required]
    });
  }

}
